import type { Variants } from './theme/default';
export type ChatProps = {
    /** massage content chat bubble */
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    /** position massage */
    direction?: 'start' | 'end';
    /** url image image avatar */
    avatarSrc?: string;
    /** content above the chat bubble */
    header?: React.ReactNode;
    /** content below the chat bubble */
    footer?: React.ReactNode;
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
    color?: Variants | (string & {});
};
/**
 * Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc
 */
declare const Chat: import("react").ForwardRefExoticComponent<ChatProps & import("react").RefAttributes<HTMLDivElement>>;
export default Chat;
