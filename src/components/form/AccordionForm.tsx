import React from 'react';
import { Schema } from './types';
import { fabricsInput } from './fabrics';
import Accordion from '../accordion';


export type AccordionScnema = {
    /** уникальный параметр обязательно */
    id: string | number
    label: string
    scheme: Schema[]
}
export type AccordionFormProps = {
    scheme: AccordionScnema[]
    /** все данные форм при изменении данных */
    onChange?: (state: Record<string, any>)=> void
    /** показывает изменение конкретного значения инпута, старое => новое */
    onSpecificChange?: (old: Record<string, any>, news: Record<string, any>, fieldAccordionId: string | number)=> void
    /** единый алиас на позицию лейблов инпутов (что бы каждому в ручную не прописывать)   */
    labelPosition?:  "left" | "right" | "column"
    activeIndex?: number[] | 'all'
    headerStyle?: React.CSSProperties
}



/**
 * `onChange` - весь список формы получить по изменению значения ввода любого инпута        
 * `onSpecificChange` - получить только тот который обновился а так же его предыдушее значение     
 * `labelPosition` - единый алиас на позицию лейблов инпутов (что бы каждому в ручную не прописывать)         
 *  @example scheme: [
 *      {
 *          id: base,
 *          label: Базовые настройки,
 *          scheme: [
 *              { type: 'text', id: 'test', placeholder: 'placeholder', label: 'test', position: 'column', left: <AccountBox/> },
 *              { type: 'number', id: 'test2', label: 'test', position: 'column', left: <Calculate/> },
 *          ]
 *      }
 * ]
 */
export default function Form({ scheme, onChange, onSpecificChange, labelPosition, activeIndex, headerStyle }: AccordionFormProps): React.JSX.Element {
    const [state, setState] = React.useState<Record<string, Record<string, any>>>({});


    const useActive =()=> {
        let result = [];

        if(activeIndex === 'all') scheme.forEach((e, i)=> result.push(i));
        else if(Array.isArray(activeIndex)) result = activeIndex;

        return result;
    }
    const handleChange = React.useCallback((fieldAccordionId: string|number, id: string, newValue: any) => {
        setState((prev) => {
            const updated = { ...prev };
            updated[fieldAccordionId][id] = newValue;

            onChange?.(updated);
            onSpecificChange?.({ [id]: prev[fieldAccordionId][id] }, { [id]: newValue }, fieldAccordionId);
            return updated;
        });
    }, [onChange, onSpecificChange]);
    const renderForm = (schemeIn: Schema[], fieldAccordionId: string | number) => {
        return schemeIn.map((field) => {
            if (!fabricsInput[field.type]) {
                console.warn(`Неизвестный тип поля: ${field.type}`);
                return null;
            }

            const finalField = {
                ...field,
                value: state[fieldAccordionId]?.[field.id],
                onChange: (val: any) => handleChange(fieldAccordionId, field.id, val),
                position: field.position ?? labelPosition,
            };

            return (
                <React.Fragment key={field.id}>
                    { fabricsInput[field.type](finalField) }
                </React.Fragment>
            );
        });
    }
    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const initialState: Record<string, Record<string, any>> = {};

        scheme.forEach((fieldAccordion) => {
            initialState[fieldAccordion.id] = {};

            fieldAccordion.scheme.forEach((field) => {
                initialState[fieldAccordion.id][field.id] = field.value;
            });
        });

        setState(initialState);
    }, [scheme]);


    return(
        <Accordion
            activeIndexs={useActive()}
            tabStyle={{ px:0.7, pb:2, border: '1px dotted #8686865b' }}
            headerStyle={headerStyle}
            items={
                scheme.map((acform) => ({
                    title: acform.label,
                    content: renderForm(acform.scheme, acform.id)
                }))
            }
        />
    );
}