import type { LinkProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';
import Typography from './Typography';


const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
    {
        style = {},
        children,
        href = '#',
        size,
        color,
        className,
        isHover,
        navigate,
        ...props
    },
    ref
) {
    const { variants } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (navigate) {
            e.preventDefault();
            navigate(href);
        }
        if (props?.onClick) props.onClick(e);
    }

    
    return (
        <Typography
            as='a'
            ref={ref}
            className={`hover:opacity-70 link ${isHover ? 'link-hover' : ''} ${className ?? ''}`}
            onClick={handleClick}
            href={navigate ? undefined : href}
            style={{
                color: variants[color] ?? color,
                ...style
            }}
            { ...props }
        >
            { children }
        </Typography>
    )
});


export default Link;