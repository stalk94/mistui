import { BaseInput } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';


export default function InfoDate() {
    return (
        <div className="p-6 space-y-8">
            <Section
                title="Date input"
                description=""
                code={`<BaseInput placeholder="date" type='date'/>`}
            >
                <div className="flex justify-center">
                    <BaseInput placeholder="date" type='date'/>
                </div>
            </Section>
        </div>
    );
}


InfoDate.meta = {
    value: {
        values: ['string'],
        type: 'string',
        description: 'Текущее значение цвета в формате rgba().'
    },
    onChange: {
        values: ['function'],
        type: 'function',
        description: 'Вызывается при изменении цвета.'
    },
    placeholder: {
        values: ['string'],
        type: 'string',
        description: 'Текст внутри поля по умолчанию.'
    },
    required: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Обязательное поле.'
    },
    color: {
        values: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'primary',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    size: {
        values: ['xs', 'sm', 'md', 'lg', 'xl'],
        type: 'enum',
        description: 'Размер компонента.'
    }
}