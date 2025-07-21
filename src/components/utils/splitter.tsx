import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import type { SplitterPanelProps, SplitterProps } from './types';
import { Fragment } from 'react';


export function SplitterCustom({ 
    color, 
    orientation = 'horizontal',
    disabled,
    ...props
}: SplitterProps) {
    const uid = useUids('splitter');
    const { variants, autosizes, plugins } = useTheme();
    const curColor = (variants[color] ?? color) ?? '#bdbbbe'; 
    const colorGutter = (variants[color] ?? color)
        ? plugins.alpha((variants[color] ?? color), 0.3)
        : 'rgba(255, 255, 255, 0.03)';
    

    return (
        <Fragment>
             <style>
                {`
                    .p-splitter[data-style-id="${uid}"] {
                        border: 1px solid ${plugins.alpha(curColor, 0.3)};
                        border-radius: 2px;
                        color: rgba(255, 255, 255, 0.87);
                    }
                    .p-splitter[data-style-id="${uid}"] .p-splitter-gutter {
                        transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                        background: ${colorGutter};
                        ${disabled ? 'pointer-events: none' : ''};
                    }
                    .p-splitter[data-style-id="${uid}"] .p-splitter-gutter .p-splitter-gutter-handle {
                        ${disabled ? '' : `background: ${curColor}`};
                    }
                    .p-splitter[data-style-id="${uid}"] .p-splitter-gutter .p-splitter-gutter-handle:focus-visible {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: 0 0 0 0.2rem rgba(129, 140, 248, 0.2);
                        
                    }
                    .p-splitter[data-style-id="${uid}"] .p-splitter-gutter-resizing {
                        background: ${plugins.alpha(curColor, 0.2)};
                    }
                `}
            </style>

            <Splitter
                data-style-id={uid}
                layout={orientation}
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