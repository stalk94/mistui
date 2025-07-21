import {NumberInput } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoNumberInput(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section
                title="NumberInput"
                description="Базовый числовой инпут"
                code={`<NumberInput placeholder="Введите число" />`}
            >
                <div className="flex justify-center">
                    <NumberInput size='sm' placeholder="Введите число" />
                </div>
            </Section>

            {/* with icons */}
            <Section
                title="NumberInput с иконками"
                description="Инкремент и декремент"
                code={`<NumberInput iconEnable placeholder="enableIcons" />`}
            >
                <div className="flex justify-center">
                    <NumberInput value={3} size='sm' iconEnable placeholder="enableIcons" />
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="NumberInput sizes"
                description="Разные размеры"
                code={sizes
                    .map((size) => `<NumberInput size="${size}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <NumberInput
                            key={size}
                            size={size}
                            placeholder={size}
                            iconEnable
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="NumberInput colors"
                description="Разные цвета"
                code={colors
                    .map((color) => `<NumberInput color="${color}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color) => (
                        <NumberInput
                            key={color}
                            size='sm'
                            color={color}
                            placeholder={color}
                            iconEnable
                        />
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoNumberInput.meta = {
    ...inputsMeta,
    step: {
        values: ['number'],
        type: 'number',
        description: 'Шаг при инкременте и декременте.'
    },
    iconEnable: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Включает кнопки плюс/минус.'
    },
}