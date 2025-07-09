import React from 'react';
import { ButtonProps, Divider, Typography } from '@mui/material';
import OauthForm, { SchemaOauth } from './oauth';
import RegOrAuthForm, { TypeSchema, Schema, ValidatorCustom } from './auth-reg';


export type FormAuthOrRegProps = {
    loading: boolean
    onClickRegistration: (data: Record<string, string | number>)=> void
    onClickOauthButton: (type: TypeSchema)=> void
    schemeAuthForm?: Schema[]
    propsButton?: ButtonProps & {
        children: string
    }
    schemeOauth?: SchemaOauth[]
    validatorsAuthForm?: Record<'password' | 'login' | 'email' | 'phone', ValidatorCustom>
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
}: FormAuthOrRegProps) {
    const sx = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%', 
        opacity: 0.85,
        mb: 1.5,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }

    const testSchemeBaseInput = [
        { placeholder: 'min 6 simbol', type: 'login', sx: { mt: 2 } },
        { type: 'email', sx: { mt: 2 } },
        { placeholder: 'min 6 simbol', type: 'password', sx: { mt: 2 } },
        { placeholder: 'min 6 simbol', type: 'password2', sx: { mt: 2 } }
    ];
    const schemeOauthTest = [
        { type: 'google', button: { sx, color: 'primary' } },
        { type: 'facebook', button: { sx, color: 'primary' } }
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

            <Divider sx={{ mt: 2 }}>
                <Typography variant="body1" color="text.secondary">
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
                    variant: 'outlined',
                    color: 'success',
                    size: 'large',
                    sx: {
                        width: '100%',
                        mt: 5,
                        boxShadow: 1,
                    },
                    ...propsButton
                }}
            />
        </>
    )
}