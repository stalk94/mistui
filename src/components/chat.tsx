import { forwardRef, useMemo } from 'react';
import { useTheme } from './theme';
import type { Variants } from './theme/default';


export type ChatProps = {
    /** massage content chat bubble */
    children: React.ReactNode
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    /** position massage */
    direction?: 'start' | 'end' 
    /** url image image avatar */
    avatarSrc?: string
    /** content above the chat bubble */
    header?: React.ReactNode
    /** content below the chat bubble */
    footer?: React.ReactNode
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link' 
    color?: Variants | (string & {})
}


/**
 * Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc
 */
const Chat = forwardRef<HTMLDivElement, ChatProps>(function Chat(
    {
        children,
        className,
        style = {},
        direction = 'start',
        avatarSrc,
        header,
        footer,
        variant = 'contained',
        color,
        ...props
    }, 
    ref
) {
    const { plugins, variants } = useTheme();

    const colorContrast = useMemo(() => {
        if (variant === 'soft' || variant === 'contained') {
            return plugins.contrast((variants[color] ?? color));
        }
        else return (variants[color] ?? color);
    }, [style, color, variant]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        let st = {
            ...style,
            backgroundColor: (variant !== 'ghost' && variant !== 'link') && (variants[color] ?? color),
            color: (variant !== 'soft' && variant !== 'contained')
                ? (variants[color] ?? color)
                : colorContrast
        }


        if (variant === 'dash' || variant === 'outline') {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: inlneBg ?? '',
                borderColor: (variants[color] ?? color) ?? inlneBorder ?? inlneBg,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }

        return st;
    }, [style, color, variant]);


    return(
        <div
            ref={ref}
            className={`chat chat-${direction} ${className ?? ''}`}
            style={style}
            { ...props }
        >
            {/* avatar */}
            { avatarSrc &&
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="chat image avatar"
                            src={avatarSrc}
                        />
                    </div>
                </div>
            }

            {/* header */}
            {header &&
                <div className="chat-header">
                    { header }
                </div>
            }

            {/* message */}
            <div 
                className={`chat-bubble`}
                style={getStyle}
            >
                { children }
            </div>

            {/* footer */}
            {footer &&
                <div className="chat-footer opacity-50">
                    { footer }
                </div>
            }
        </div>
    );
});


export default Chat;