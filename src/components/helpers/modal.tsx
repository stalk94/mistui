import { forwardRef, Fragment, useState } from 'react';
import type { ModalProps } from './types';
import { useClickOutside } from '../hooks';
import { useTheme } from '../theme';


const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
    {
        children,
        actions,
        className,
        classNameModalBox,
        style = {},
        isCloseClickOutside,
        ...props
    }, 
    ref
) {
    const { } = useTheme();
    const [open, setOpen] = useState(false);

    if (isCloseClickOutside) useClickOutside(['[data-modal-root]'], 
        ()=> setOpen(false)
    );


    return(
        <Fragment>
            { open &&
                <div 
                    ref={ref}
                    className={`modal ${className && className}`}
                    style={style}
                    data-modal-root
                >
                    <div className={`modal-box ${classNameModalBox && classNameModalBox}`}>
                        { children }

                        { actions && 
                            <div className="modal-action">
                                { actions }
                            </div>
                        }
                    </div>
                </div>
            }
        </Fragment>
    );
});


export default Modal;