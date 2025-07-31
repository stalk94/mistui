export type TypeSchema = 'login' | 'password' | 'email' | 'phone' | 'confirm';
export type ValidatorCustom = (value: any) => {
    result: boolean;
    helperText?: string;
};
export type Schema = {
    placeholder?: string;
    label?: string;
    type: TypeSchema;
    sx: SxProps;
};
export type BaseFormProps = {
    loading: boolean;
    scheme: Schema[];
    onRegistration: (outScheme: Record<string, string | number>) => void;
    button?: ButtonProps;
    /** Кастомные валидаторы */
    validators?: Record<'password' | 'login' | 'email' | 'phone' | string, ValidatorCustom>;
};
export default function RegistrationForm({ scheme, loading, onRegistration, button, validators }: BaseFormProps): import("react/jsx-runtime").JSX.Element;
