import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import type { SplitterPanelProps, SplitterProps } from './types';
import { Fragment } from 'react';


export function SplitterCustom({ 
    color, 
    position,
    ...props
}: SplitterProps) {
    const uid = useUids('splitter');
    const { variants, autosizes } = useTheme();
    const curColor = (variants[color] ?? color) ?? '#bdbbbe'; 

    return (
        <Fragment>
             <style>
                {/*css*/`
                    .p-splitter-gutter {
                        background-color: transparent;
                        position: relative;
                    }
                    .p-splitter-gutter::before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        opacity: 0.5;
                        transition: opacity 0.2s;
                    }
                    /* Горизонтальный (разделение слева-направо) */
                    .p-splitter-horizontal .p-splitter-gutter::before {
                        top: 0;
                        bottom: 0;
                        background-image: repeating-linear-gradient(to bottom,
                            ${curColor},
                            ${curColor} 1px,
                            transparent 1px,
                            transparent 4px);
                        width: 1px;
                        cursor: col-resize;
                    }
                    /* Вертикальный (разделение сверху-вниз) */
                    .p-splitter-vertical .p-splitter-gutter::before {
                        left: 0;
                        right: 0;
                        background-image: repeating-linear-gradient(to right,
                            ${curColor},
                            ${curColor} 1px,
                            transparent 1px,
                            transparent 4px);
                        height: 1px;
                        cursor: row-resize;
                    }
                    /* Hover эффект */
                    .p-splitter-gutter:hover::before {
                        opacity: 1;
                    }
                `}
            </style>

            <Splitter
                layout={position ?? 'horizontal'}
                { ...props }
            />
        </Fragment>
    );
}


export function SplitterPanelCustom({ ...props }: SplitterPanelProps) {
    return (
        <SplitterPanel
            { ...props }
        />
    );
}