import { FormProps } from './types';
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
export default function Form({ scheme, onChange, labelPosition }: FormProps): import("react/jsx-runtime").JSX.Element;
