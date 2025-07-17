import type { BaseProps, NumberInputProps, SelectInputProps, SliderInputProps, SwitchBoxInputProps, FileInputProps, AutoInputProps, CheckBoxInputProps } from '../inputs';
import type { ToggleButtonGroupProps, FilterToggleButtonGroupProps } from '../buttons';
import type { DividerProps } from '../utils/divider';
export type TypeSchema = 'text' | 'textArea' | 'number' | 'date' | 'color' | 'time' | 'slider' | 'file' | 'radio' | 'switch' | 'toggle' | 'select' | 'checkbox' | 'autocomplete' | 'divider' | 'groupButton' | 'groupButtonFiltre' | 'custom';
interface BaseSchema<T = any> {
    /** уникальный ключ */
    id: string;
    type: TypeSchema;
    position?: 'left' | 'top' | 'right';
    label?: string | React.ReactElement;
    value?: any;
    onChange?: (value: T) => void;
}
interface TypeToSchemaMap {
    text: BaseProps;
    textArea: BaseProps;
    number: NumberInputProps;
    date: BaseProps;
    time: BaseProps;
    color: SelectInputProps;
    slider: SliderInputProps;
    file: FileInputProps;
    switch: SwitchBoxInputProps;
    radio: CheckBoxInputProps;
    toggle: ToggleButtonGroupProps;
    checkbox: CheckBoxInputProps;
    select: SelectInputProps;
    autocomplete: AutoInputProps;
    groupButton: ToggleButtonGroupProps;
    groupButtonFiltre: FilterToggleButtonGroupProps;
    divider: DividerProps;
    custom: {
        render: (props: any) => React.ReactElement;
    };
}
export type Schema<T extends TypeSchema = TypeSchema> = BaseSchema & {
    type: T;
} & TypeToSchemaMap[T];
export type FormProps = {
    scheme: Schema[];
    /** все данные форм при изменении данных */
    onChange?: (id: string | number, value: any) => void;
    /** единый алиас на позицию лейблов инпутов (что бы каждому в ручную не прописывать)   */
    labelPosition?: "left" | "right" | "top";
};
export {};
