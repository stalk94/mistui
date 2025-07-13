import type { PopUpMenuProps } from './type';



export default function PopUpMenu({ style, isHover, children, content, ...props }: PopUpMenuProps) {
    return(
        <div
            className={`
                dropdown 
                shadow-sm
                bg-[var(--color-base-400)]
                max-h-80 
                overflow-y-auto 
                z-[9999]
                p-2
                rounded-box
            `}
            style={style}
            { ...props }
        >
            { children }
        </div>
    );
}