import React from 'react';
import { Schema, TypeSchema } from './types';
import { 
    BaseInput, NumberInput, ColorPicker, SliderInput, SwitchBox, TextArea,
    Select, CheckBox, FileInput, AutoComplete, RadioBox
} from '../inputs';
import { GroupButton, GroupButtonFiltre } from '../buttons';
import Divider from '../utils/divider';



export const fabricsInput: Record<TypeSchema, (schema: any) =>  React.JSX.Element> = {
    text: (schema) => <BaseInput {...schema} />,
    textArea: (schema) => <TextArea {...schema} />,
    number: (schema) => <NumberInput {...schema} />,
    color: (schema) => <ColorPicker {...schema} />,
    date: (schema) => <BaseInput type='date' {...schema} />,
    time: (schema) => <BaseInput type='time' {...schema} />,
    file: (schema) => <FileInput {...schema} />,

    checkbox: (schema) => <CheckBox {...schema} />,
    radio: (schema)=> <RadioBox {...schema} />,
    switch: (schema) => <SwitchBox {...schema} />,
    slider: (schema) => <SliderInput {...schema} />,

    select: (schema) => <Select {...schema} />,
    autocomplete: (schema) => <AutoComplete {...schema} />,

    groupButton: (schema) => <GroupButton {...schema} />,
    groupButtonFiltre: (schema) => <GroupButtonFiltre {...schema} />,

    divider: (schema) => <Divider {...schema} />,
}