import React from 'react';
import { Schema } from './types';
export type AccordionScnema = {
    /** уникальный параметр обязательно */
    id: string | number;
    label: string;
    scheme: Schema[];
};
export type AccordionFormProps = {
    scheme: AccordionScnema[];
    /** все данные форм при изменении данных */
    onChange?: (state: Record<string, any>) => void;
    /** показывает изменение конкретного значения инпута, старое => новое */
    onSpecificChange?: (old: Record<string, any>, news: Record<string, any>, fieldAccordionId: string | number) => void;
    /** единый алиас на позицию лейблов инпутов (что бы каждому в ручную не прописывать)   */
    labelPosition?: "left" | "right" | "column";
    activeIndex?: number[] | 'all';
    headerStyle?: React.CSSProperties;
};
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
export default function Form({ scheme, onChange, onSpecificChange, labelPosition, activeIndex, headerStyle }: AccordionFormProps): React.JSX.Element;
