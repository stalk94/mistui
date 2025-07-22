import { SwitchBox } from '@/components/inputs';
import { Section, Grid as ButtonGrid, colorsCustom, sizes, colors, variants } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoSwitchBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="base"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <SwitchBox
                        value={false}
                        className='mr-2'
                    />
                    <SwitchBox
                        value={true}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    {variants.map((variant, i) => (
                        <SwitchBox
                            key={i} 
                            variant={variant}
                            size='sm'
                            className='mr-2'
                            value={true}
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
                        <SwitchBox
                            key={size} 
                            size={size} 
                            shadow="sm"
                            labelTop={size}
                            value={true}
                            className='mr-2'
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
                        <SwitchBox 
                            key={i} 
                            variant='outline'
                            color={color}
                            size='sm'
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* label left */}
            <Section
                title="label"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<BaseInput variant="${variant}" color="${colorsCustom[i]}">${variant}</BaseInput>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    <div className="flex-col m-auto">
                        <SwitchBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size='sm'
                            labelTop={'top-label'}
                            className="mb-3"
                        />
                        <SwitchBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size='sm'
                            labelLeft={'left-label'}
                            className="mb-3"
                        />
                        <SwitchBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size='sm'
                            labelRight={'right-label'}
                        />
                    </div>
                </ButtonGrid>
            </Section>

            {/* combo label */}
            <Section
                title="label position varints"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    <SwitchBox
                        variant='dash'
                        color={colorsCustom[2]}
                        size='sm'
                        labelTop={'top-label'}
                        labelRight={'right-label'}
                        labelLeft={'left-label'}
                    />
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoSwitchBox.meta = {
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