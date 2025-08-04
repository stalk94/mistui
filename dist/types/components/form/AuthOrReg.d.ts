import { SchemaOauth } from './oauth';
import { TypeSchema, Schema } from './auth-reg';
import { Button } from '../buttons';
import type { Validator } from './validator-defolt';
export type FormAuthProps = {
    loading: boolean;
    onClickRegistration: (data: Record<string, string | number>) => void;
    onClickOauthButton: (type: TypeSchema) => void;
    schemeAuthForm?: Schema[];
    propsButton?: typeof Button;
    schemeOauth?: SchemaOauth[];
    validatorsAuthForm?: Record<'password' | 'login' | 'email' | 'phone', Validator>;
};
/**
 * Тестовая форма для создания авторизации/регистрации с Oauth, высокого уровня реализации
 * * `onClickRegistration` - Action функция
 * * `onClickOauthButton` - Action функция
 * * `schemeAuthForm`, - схема по которой создадутся инпуты базовой формы
 * * `validatorsAuthForm` - список валидаторов пользователя, не переопределив како либо из списка будет использован системный
 * * `propsButton`, - Пропс кнопки базовой формы
 * * `schemeOauth` - схема по которой создадутся кнопки формы входа через соц сети
 */
export default function FormAuthOrReg({ loading, onClickRegistration, onClickOauthButton, schemeAuthForm, propsButton, schemeOauth }: FormAuthProps): import("react/jsx-runtime").JSX.Element;
