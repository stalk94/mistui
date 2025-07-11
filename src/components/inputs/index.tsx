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




/** паттерны регулярок */
export const baseValidators = {
    password: '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
    tel: '[0-9]*',
    login: '[A-Za-z][A-Za-z0-9\-]*',
    email: '',
    url: '',
    search: ''
}