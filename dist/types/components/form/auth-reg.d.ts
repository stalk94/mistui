import { Button } from '../../index';
import { Validator } from './validator-defolt';
export type TypeSchema = 'login' | 'password' | 'email' | 'phone' | 'confirm';
export type Schema = {
    placeholder?: string;
    label?: string;
    type: TypeSchema;
};
export type BaseFormProps = {
    loading: boolean;
    scheme: Schema[];
    onRegistration: (outScheme: Record<string, string | number>) => void;
    button?: typeof Button;
    /** Кастомные валидаторы */
    validators?: Record<'password' | 'login' | 'email' | 'phone' | string, Validator>;
};
export default function RegistrationForm({ scheme, loading, onRegistration, button, validators }: BaseFormProps): import("react/jsx-runtime").JSX.Element;
