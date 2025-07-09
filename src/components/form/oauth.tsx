import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { Google, Facebook, GitHub, Telegram, ExitToApp } from '@mui/icons-material';


export type TypeOauth = 'google' | 'facebook' | 'github' | 'telegram';
export type SchemaOauth = {
    type: TypeOauth
    label?: string
    button?: ButtonProps
}
type SocialAuthButtonsProps = {
    scheme: SchemaOauth[]
    loading?: boolean 
    onClick: (type: TypeOauth)=> void
}


const ICONS: Record<TypeOauth, React.ReactNode> = {
    google: <Google />,
    facebook: <Facebook />,
    github: <GitHub />,
    telegram: <Telegram />,
};


export default function SocialAuthButtons({ scheme, loading = false, onClick, }: SocialAuthButtonsProps) {
    const capitalize =(word: string)=> {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }


    return (
        <React.Fragment>
            { scheme.map((item, index) => {
                const icon = ICONS[item.type] ?? null;
                const label = item.label ?? `Continue with ${capitalize(item.type)}`;

                return (
                    <Button
                        key={index}
                        onClick={() => onClick?.(item.type)}
                        disabled={loading}
                        variant="outlined"
                        color="secondary"
                        startIcon={
                            loading ? <CircularProgress size={20} color="inherit" /> : icon
                        }
                        endIcon={<ExitToApp />}
                        {...item.button}
                    >
                        { label }
                    </Button>
                );
            })}
        </React.Fragment>
    );
}