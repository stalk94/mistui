import { forwardRef, Fragment, useState } from 'react';
import type { ModalProps } from './types';
import { useTheme } from '../theme';


const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
    {
        children,
        actions,
        className,
        classNameModalBox,
        style = {},
        open,
        ...props
    }, 
    ref
) {
    const { } = useTheme();


    return (
        <dialog
            ref={ref}
            className={`modal ${className ?? ''} ${open ? 'modal-open' : ''}`}
            style={style}
            data-modal-root
            { ...props }
        >
            <div className={`modal-box ${classNameModalBox ?? ''}`}>
                { children }

                {actions &&
                    <div className="modal-action">
                        { actions }
                    </div>
                }
            </div>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
});


export default Modal;