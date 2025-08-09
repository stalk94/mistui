export * from './type';
export { default as BaseInput } from './base';
export { default as NumberInput } from './number';
export { default as Select } from './select';
export { default as TextArea } from './text-area';
export { default as CheckBox } from './checks';
export { default as FileInput } from './file';
export { default as SliderInput } from './slider';
export { default as AutoComplete } from './autocomplete';
export { default as SwitchBox } from './switch';
export { default as RadioBox } from './radio';
export { default as ColorPicker } from './color';
export { default as TimePicker } from './time';
export { default as DatePicker } from './date';
export { default as PasswordInput } from './password';
export { default as Rating } from './rating';
/** паттерны регулярок */
export declare const baseValidators: {
    password: string;
    tel: string;
    login: string;
    email: string;
    url: string;
    search: string;
};
