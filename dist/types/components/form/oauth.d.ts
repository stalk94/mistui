import { ButtonProps } from '@mui/material';
export type TypeOauth = 'google' | 'facebook' | 'github' | 'telegram';
export type SchemaOauth = {
    type: TypeOauth;
    label?: string;
    button?: ButtonProps;
};
type SocialAuthButtonsProps = {
    scheme: SchemaOauth[];
    loading?: boolean;
    onClick: (type: TypeOauth) => void;
};
export default function SocialAuthButtons({ scheme, loading, onClick, }: SocialAuthButtonsProps): import("react/jsx-runtime").JSX.Element;
export {};
