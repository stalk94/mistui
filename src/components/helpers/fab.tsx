import { useState, useRef, useEffect, cloneElement } from "react";
import { Variants } from '../theme/default';
import type { FabProps } from "./types";


export default function Fab({
    children,
    isFlower,
    button,
    buttonClose
}: FabProps) {
    

    return (
        <div className={`fab ${isFlower ? 'fab-flower' : ''}`}>
            { !button && <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-primary">F</div> }
            { button && 
                cloneElement(button, {
                    tabIndex: 0,
                    role: 'button'
                })
            }

            { !buttonClose && 
                <div className="fab-main-action">
                    <button className="btn btn-circle btn-secondary btn-lg">
                        M
                    </button>
                </div>
            }
            { buttonClose && 
                <div className="fab-main-action">
                    { buttonClose }
                </div>
            }

            { children }
        </div>
    );
}