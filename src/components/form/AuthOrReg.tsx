import OauthForm, { SchemaOauth } from './oauth';
import RegOrAuthForm, { TypeSchema, Schema } from './auth-reg';
import Divider from '../utils/divider';
import { Typography } from '../text';
import { Button } from '../buttons';
import type { Validator } from './validator-defolt';


export type FormAuthProps = {
    loading: boolean
    onClickRegistration: (data: Record<string, string | number>)=> void
    onClickOauthButton: (type: TypeSchema)=> void
    schemeAuthForm?: Schema[]
    propsButton?: typeof Button
    schemeOauth?: SchemaOauth[]
    validatorsAuthForm?: Record<'password' | 'login' | 'email' | 'phone', Validator>
}


/**
 * Тестовая форма для создания авторизации/регистрации с Oauth, высокого уровня реализации      
 * * `onClickRegistration` - Action функция   
 * * `onClickOauthButton` - Action функция      
 * * `schemeAuthForm`, - схема по которой создадутся инпуты базовой формы    
 * * `validatorsAuthForm` - список валидаторов пользователя, не переопределив како либо из списка будет использован системный   
 * * `propsButton`, - Пропс кнопки базовой формы    
 * * `schemeOauth` - схема по которой создадутся кнопки формы входа через соц сети
 */
export default function FormAuthOrReg({ 
    loading, 
    onClickRegistration, 
    onClickOauthButton,
    schemeAuthForm,
    propsButton,
    schemeOauth
}: FormAuthProps) {
    const testSchemeBaseInput = [
        { placeholder: 'min 6 simbol', type: 'login' },
        { type: 'email' },
        { placeholder: 'min 6 simbol', type: 'password' },
        { placeholder: 'min 6 simbol', type: 'password2' }
    ];
    const schemeOauthTest = [
        { type: 'google', button: { color: 'primary' } },
        { type: 'facebook', button: { color: 'primary' } }
    ];


    return (
        <>
            <OauthForm
                loading={false}
                onClick={(type)=> {
                    if(onClickOauthButton) onClickOauthButton(type);
                    else console.log('🔑 click Oauth: ', type);
                }}
                scheme={schemeOauth ?? schemeOauthTest}
            />

            <Divider>
                <Typography variant="body1" color="secondary">
                    or
                </Typography>
            </Divider>

            <RegOrAuthForm
                loading={loading}
                scheme={schemeAuthForm ?? testSchemeBaseInput}
                onRegistration={(state) => {
                    if(onClickRegistration) onClickRegistration(state);
                    else console.log('🔑 click reg/auth button: ', state);
                }}
                button={{
                    children: 'registration',
                    variant: 'outline',
                    color: 'success',
                    ...propsButton
                }}
            />
        </>
    )
}