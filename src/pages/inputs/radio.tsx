import { RadioBox } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors, variants } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoRadioBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="base"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <RadioBox
                        value={true}
                    />
                </div>
            </Section>

            <Section
                title="variants"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    {variants.map((variant, i) => (
                        <RadioBox 
                            key={i} 
                            variant={variant}
                            size='sm'
                            value={true}
                            className='mr-2'
                        />
                    ))}
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Button size="${size}" shadow="sm">${size}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <RadioBox 
                            key={size} 
                            size={size} 
                            shadow="sm"
                            labelTop={size}
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="base variants theme colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <RadioBox 
                            key={i} 
                            variant='outline'
                            color={color}
                            size='sm'
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoRadioBox.meta = {
    ...inputsMeta,
    value: {
        values: ['string'],
        type: 'string',
        description: 'Текущее значение цвета в формате rgba().'
    },
    onChange: {
        values: ['function'],
        type: 'func',
        description: 'Вызывается при изменении цвета.'
    },
}