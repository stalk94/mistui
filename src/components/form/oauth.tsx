import React from 'react';
import { Button } from '../buttons';
import { Spinner } from '@/index';
import { FaGoogle, FaFacebookF, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";


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
    google: <FaGoogle />,
    facebook: <FaFacebookF />,
    github: <FaGithub />,
    telegram: <FaTelegramPlane />,
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
                            loading ? <Spinner /> : icon
                        }
                        endIcon={<MdOutlineExitToApp />}
                        {...item.button}
                    >
                        { label }
                    </Button>
                );
            })}
        </React.Fragment>
    );
}