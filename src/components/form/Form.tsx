'use client'
import { Fragment, useCallback, memo, useMemo, useRef } from 'react';
import { FormProps, Schema } from './types';
import { fabricsInput } from './fabrics';
import { useDebounced } from '../hooks/debounce';



const positionKeyTransform = {
    left: 'labelLeft',
    top: 'labelTop',
    right: 'labelRight',
    column: 'labelTop'
}

function shallowEqualField(a: Schema, b: Schema): boolean {
    
    return (
        a.id === b.id &&
        a.type === b.type &&
        a.value === b.value &&
        a.label === b.label &&
        a.position === b.position &&
        a?.size === b?.size
        // можешь добавить проверку на options, render и т.д., если они динамичные
    );
}
function useStableScheme(scheme: Schema[]): Schema[] {
    const prevRef = useRef<Schema[]>(scheme);
    //console.log('chek');

    const isSame =
        prevRef.current.length === scheme.length &&
            prevRef.current.every((prev, i) => shallowEqualField(prev, scheme[i]));

    if (!isSame) {
        prevRef.current = scheme;
        console.log('render');
    }

    return prevRef.current;
}


const FieldRenderer = memo(
    function FieldRenderer({
        field,
        value,
        onChange,
    }: {
        field: Schema;
        value: any;
        onChange: (v: any) => void;
    }) {
        const Component = fabricsInput[field.type];
        if (!Component) return null;

        if (field.type === 'divider') return Component(field);
        if (field.type === 'custom') return field?.render({ ...field, value, onChange });
        const { label, ...rest } = field;

        const positionKey = positionKeyTransform[field?.position ?? 'top'];
        return Component({ 
            ...rest, 
            value,
            [positionKey]: label, 
            onChange 
        });
    },
    (prev, next) =>
        prev.value === next.value &&
        prev.field === next.field // shallow compare, структура поля не менялась
);


/**
 * Конструирует по схеме набор форм ввода и обслуживает их как единый организм
 * `onChange` - весь список формы получить по изменению значения ввода любого инпута        
 * `onSpecificChange` - получить только то значение формы которая обновилась а так же ее предыдушее значение     
 * `labelPosition` - единый алиас на позицию лейблов инпутов (что бы каждому в ручную не прописывать)         
 *  @example scheme: [
 *      { type: 'custom', id: 'test8', label: 'Принять' },
 *      { type: 'text', id: 'test', placeholder: 'placeholder', label: 'test', position: 'column', left: <AccountBox/> },
 *      { type: 'number', id: 'test2', label: 'test', position: 'column', left: <Calculate/> },
 *      { type: 'color', id: 'test3', label: 'test', position: 'column' },
 *      { type: 'select', id: 'test4', label: 'test', position: 'column', items: [{ id:'1', label:'test' },...]},
 *      { type: 'toggle', id: 'test7', label: 'test', position: 'column', items: [{ id:'1', label:'test' },...]},
 *      { type: 'slider', id: 'test5', label: 'test', position: 'column' },
 *      { type: 'switch', id: 'test6', label: 'Включить свет', position: 'column' },
 *      { type: 'checkbox', id: 'test8', label: 'Принять' },
 * ]
 */
export default function Form({ scheme, onChange, labelPosition }: FormProps) {
    const stableScheme = useStableScheme(scheme);


    const handleChange = useCallback((id: any, newValue: any) => {
        onChange?.(id, newValue);
    }, [onChange]);
    const renderedFields = useMemo(() => {
        return stableScheme.map((field) => (
            <FieldRenderer
                key={field.id}
                field={{ ...field, position: field.position ?? labelPosition }}
                value={field.value}
                onChange={(val) => handleChange(field.id, val)}
            />
        ));
    }, [stableScheme, labelPosition, handleChange]);


    return (
        <Fragment>
            { renderedFields }
        </Fragment>
    );
}