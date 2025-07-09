import React from 'react';
import { LabelLogin, LabelPassword, LabelEmail, LabelPhone } from '../input/labels.inputs';
import { CheckBoxAgrement } from '../input/checkbox';
import { Button, ButtonProps, CircularProgress, SxProps, FormHelperText } from '@mui/material';
import { Person, Key, Tag, AlternateEmail, Label } from '@mui/icons-material';
import { validateEmail, validateLogin, validatePass, validatePhone, validateConfirm } from './validator-defolt';


export type TypeSchema = 'login' | 'password' | 'email' | 'phone' | 'confirm';
type TypeSchemaHandlerValid = TypeSchema | 'password2';
export type ValidatorCustom =(value: any)=> {
    result: boolean
    helperText?: string
}
export type Schema = {
    placeholder?: string 
    label?: string 
    type: TypeSchema
    sx: SxProps
}
export type BaseFormProps = {
    loading: boolean
    scheme: Schema[]
    onRegistration: (outScheme: Record<string, string|number>)=> void  
    button?: ButtonProps
    /** Кастомные валидаторы */
    validators?: Record<'password' | 'login' | 'email' | 'phone' | string, ValidatorCustom>
}



export default function RegistrationForm({ scheme, loading, onRegistration, button, validators }: BaseFormProps) {
    const ref = React.useRef<Record<TypeSchema, boolean|string>>({});
    const [isValid, setIsValid] = React.useState(true);
    const [state, setState] = React.useState<Record<TypeSchemaHandlerValid, any>>({});
    

    // совпадение пароля в confirm password форме
    const validateConfirmPass = (curentPassword: string, value: string) => {
        if (curentPassword !== value) {
            setIsValid(false);

            return {
                result: false,
                helperText: 'The passwords do not match'
            }
        }
        else {
            setIsValid(true);

            return {
                result: true
            }
        }
    }
    const handlerValidate =(type: TypeSchemaHandlerValid, value: string | boolean | string[])=> {
        let result: {result: boolean, helperText?: string} = {result: true};
        
        if(type === 'login') result = validators?.[type]?.(value) ?? validateLogin(value);
        else if(type === 'password') result = validators?.[type]?.(value) ?? validatePass(value);
        else if(type === 'password2') result = validateConfirmPass(value[0], value[1]);
        else if(type === 'email') result = validators?.[type]?.(value) ?? validateEmail(value);
        else if(type === 'phone') result = validators?.[type]?.(value) ?? validatePhone(value);
        else if(type === 'confirm') result = validators?.[type]?.(value) ?? validateConfirm(value);

        if(ref.current) {
            if(result.result && ref.current[type]) delete ref.current[type];
            else if(!result.result) ref.current[type] = result.helperText ?? true;
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
    const validatorsRender = React.useMemo(() => ({
        login: () => handlerValidate('login', state.login),
        password: () => handlerValidate('password', state.password),
        password2: () => handlerValidate('password2', [state.password, state.password2]),
        email: () => handlerValidate('email', state.email),
        phone: () => handlerValidate('phone', state.phone),
        confirm: () => handlerValidate('confirm', state.confirm),
    }), [state]);

    React.useEffect(()=> {
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
        <React.Fragment>
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
                    login: <LabelLogin key={index} {...commonProps} left={<Person />} useVerify={validatorsRender[type]} />,
                    password: <LabelPassword key={index} {...commonProps} left={<Key />} useVerify={validatorsRender[type]} />,
                    password2: <LabelPassword key={index} {...commonProps} left={<Key />} useVerify={validatorsRender[type]} />,
                    email: <LabelEmail key={index} {...commonProps} left={<AlternateEmail />} useVerify={validatorsRender[type]} />,
                    phone: <LabelPhone key={index} {...commonProps} left={<Tag />} useVerify={validatorsRender[type]} />,
                    confirm: <CheckBoxAgrement key={index} {...commonProps} useVerify={validatorsRender[type]} />
                };

                return componentMap[keyName] ?? null;
            })}

            {/* кнопка регистрации */}
            <Button sx={{ mt: 2 }}
                variant='outlined'
                color='success'
                disabled={!isValid || loading} 
                onClick={()=> onRegistration && onRegistration(state)}
                startIcon={loading ? <CircularProgress size={24} color="inherit" /> : null}
                { ...button }
            />
        </React.Fragment>
    );
}