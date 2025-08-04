import { Button } from '../buttons';
export type TypeOauth = 'google' | 'facebook' | 'github' | 'telegram';
export type SchemaOauth = {
    type: TypeOauth;
    label?: string;
    button?: typeof Button;
};
type SocialAuthButtonsProps = {
    scheme: SchemaOauth[];
    loading?: boolean;
    onClick: (type: TypeOauth) => void;
};
export default function SocialAuthButtons({ scheme, loading, onClick, }: SocialAuthButtonsProps): import("react/jsx-runtime").JSX.Element;
export {};
