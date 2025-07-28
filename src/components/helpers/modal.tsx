import { forwardRef, Fragment, useState } from 'react';
import type { ModalProps } from './types';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';
import { useUids } from '../hooks/uuid';


const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
    {
        children,
        actions,
        style = {},
        open,
        className,
        classNameModalBox,
        classNameActions,
        ...props
    }, 
    ref
) {
    const { styles } = useTheme();
    const uid = useUids();


    return (
        <dialog
            ref={ref}
            className={cs(`
                modal 
                ${className ?? ''}  
                ${open ? 'modal-open' : ''}
            `)}
            style={style}
            data-modal-root={uid}
            { ...props }
        >
            <div 
                className={cs(`
                    modal-box 
                    ${classNameModalBox ?? ''} 
                `)}
                style={{
                    backgroundColor: styles.modal.backgroundColor, 
                    borderColor: styles.modal.borderColor,
                    borderWidth: styles.modal.borderWidth
                }}
            >
                { children }

                {actions &&
                    <div 
                        className={cs(`
                            modal-action
                            ${classNameActions ?? ''}
                        `)}
                    >
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