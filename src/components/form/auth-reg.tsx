import { useEffect, useState, useRef, useMemo, Fragment } from 'react';
import { BaseInput, CheckBox, Spinner, Button, PasswordInput } from '../../index';
import { IoMdPerson } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { validateEmail, validateLogin, validatePass, validatePhone, validateConfirm, Validator } from './validator-defolt';


export type TypeSchema = 'login' | 'password' | 'email' | 'phone' | 'confirm';
type TypeSchemaHandlerValid = TypeSchema | 'password2';

export type Schema = {
    placeholder?: string 
    label?: string 
    type: TypeSchema
}
export type BaseFormProps = {
    loading: boolean
    scheme: Schema[]
    onRegistration: (outScheme: Record<string, string|number>)=> void  
    button?: typeof Button
    /** Кастомные валидаторы */
    validators?: Record<'password' | 'login' | 'email' | 'phone' | string, Validator>
}



export default function RegistrationForm({ scheme, loading, onRegistration, button, validators }: BaseFormProps) {
    const ref = useRef<Record<TypeSchema, boolean|string>>({});
    const [isValid, setIsValid] = useState(true);
    const [state, setState] = useState<Record<TypeSchemaHandlerValid, any>>({});
    

    // совпадение пароля в confirm password форме
    const validateConfirmPass = (curentPassword: string, value: string) => {
        if (curentPassword !== value) {
            setIsValid(false);

            return {
                valid: false,
                helper: 'The passwords do not match'
            }
        }
        else {
            setIsValid(true);

            return {
                valid: true
            }
        }
    }
    const handlerValidate =(type: TypeSchemaHandlerValid, value: string | boolean | number | string[])=> {
        let result: {valid: boolean, helper?: string} = {valid: true};
        
        if(type === 'login') result = validators?.[type]?.(value) ?? validateLogin(value);
        else if(type === 'password') result = validators?.[type]?.(value) ?? validatePass(value);
        else if(type === 'password2') result = validateConfirmPass(value[0], value[1]);
        else if(type === 'email') result = validators?.[type]?.(value) ?? validateEmail(value);
        else if(type === 'phone') result = validators?.[type]?.(value) ?? validatePhone(value);
        else if(type === 'confirm') result = validators?.[type]?.(value) ?? validateConfirm(value);

        if(ref.current) {
            if(result.valid && ref.current[type]) delete ref.current[type];
            else if(!result.valid) ref.current[type] = result.helper ?? true;
        }


        return result;
    }
    const getScheme =(type: TypeSchema)=> {
        const find = scheme.find((elem)=> elem.type === type);
        return find;
    }
    const useChangeValue =(name: string, value: any)=> {
        setState((old) => ({ ...old, [name]: value }));
    }
    const useTransform =(scheme: Schema[])=> {
        const shab = {}

        scheme.map((elem)=> {
            shab[elem.type] = '';
            ref.current[elem.type] = true;
        });

        setState(shab);
    }
    const validatorsRender = useMemo(() => ({
        login: () => handlerValidate('login', state.login),
        password: () => handlerValidate('password', state.password),
        password2: () => handlerValidate('password2', [state.password, state.password2]),
        email: () => handlerValidate('email', state.email),
        phone: () => handlerValidate('phone', state.phone),
        confirm: () => handlerValidate('confirm', state.confirm),
    }), [state]);

    useEffect(()=> {
        if (typeof window === 'undefined') return;
        
        useTransform(scheme);

        const timer = setInterval(()=> {
            if(ref.current) {
                const result = Object.values(ref.current).find((elem)=> elem);
                setIsValid(!Boolean(result));
            }
        }, 300);


        return ()=>  clearInterval(timer);
    }, [scheme]);
    

    return (
        <Fragment>
            { Object.keys(state).map((keyName: TypeSchema, index) => {
                const element = getScheme(keyName);
                const type = keyName as TypeSchema;
                if (!element) return null;

                const commonProps = {
                    position: 'column',
                    disabled: loading,
                    label: element.label,
                    placeholder: element.placeholder,
                    value: state[keyName],
                    sx: element.sx,
                    onChange: (val: any) => useChangeValue(keyName, val),
                };

                const componentMap: Record<string, React.JSX.Element> = {
                    login: <BaseInput key={index} {...commonProps} labelLeft={<IoMdPerson />} validator={validatorsRender[type]} />,
                    password: <PasswordInput key={index} {...commonProps} labelLeft={<FaKey />} validator={validatorsRender[type]} />,
                    password2: <PasswordInput key={index} {...commonProps} labelLeft={<FaKey />} validator={validatorsRender[type]} />,
                    email: <BaseInput key={index} {...commonProps} labelLeft={<MdOutlineAlternateEmail />} validator={validatorsRender[type]} />,
                    phone: <BaseInput key={index} {...commonProps} labelLeft={<FaTag />} validator={validatorsRender[type]} />,
                    confirm: <CheckBox key={index} {...commonProps} />
                };

                return componentMap[keyName] ?? null;
            })}

            {/* кнопка регистрации */}
            <Button
                variant='outline'
                color='success'
                disabled={!isValid || loading} 
                onClick={()=> onRegistration?.(state)}
                { ...button }
            >
                { loading && <Spinner /> }
            </Button>
        </Fragment>
    );
}