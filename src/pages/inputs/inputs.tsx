import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, sizes, variants, colorsCustom } from '../helpers';
import { BaseInput } from '@/components/inputs';



// ! код примеров нет
export default function InfoInput() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section title="BaseInput" description="кнопка"
                code={`<BaseInput type='text' size='sm' placeholder='placeholder'></BaseInput>`}
            >
                <div className="flex justify-center">
                    <BaseInput
                        type='text'
                        size='sm'
                        placeholder='placeholder'
                        labelLeft={'🔍︎'}
                        labelTop={'label'}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="BaseInput variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<BaseInput variant="${variant}">${variant}</BaseInput>`)
                    .join('\n')
                }
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput 
                            key={i} 
                            variant={variant}
                            type='text'
                            size='sm'
                            placeholder={variant}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="BaseInput base variants theme colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <BaseInput 
                            key={i} 
                            variant='outline'
                            color={color}
                            type='text'
                            size='sm'
                            placeholder={color}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                title="Button sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Button size="${size}" shadow="sm">${size}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <BaseInput 
                            key={size} 
                            size={size} 
                            shadow="sm"
                            labelTop={size}
                            placeholder={size}
                            value={size === 'xs' ? 'easter egg' : ''}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom color */}
            <Section
                title="BaseInput custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<BaseInput variant="${variant}" color="${colorsCustom[i]}">${variant}</BaseInput>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            variant={variant}
                            size='sm'
                            color={colorsCustom[i]}
                            placeholder={colorsCustom[i]}
                        >
                           
                        </BaseInput>
                    ))}
                </ButtonGrid>
            </Section>

            {/* label left */}
            <Section
                title="BaseInput label left"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<BaseInput variant="${variant}" color="${colorsCustom[i]}">${variant}</BaseInput>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            variant={variant}
                            color={colors[i]}
                            size='sm'
                            
                            placeholder={colorsCustom[i]}
                            labelLeft={'🔍︎'}
                        >
                           
                        </BaseInput>
                    ))}
                </ButtonGrid>
            </Section>

             <Section
                title="BaseInput label right"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<BaseInput variant="${variant}" color="${colorsCustom[i]}">${variant}</BaseInput>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            variant={variant}
                            color={colors[i]}
                            size='sm'
                            
                            placeholder={colorsCustom[i]}
                            labelRight={'🔍︎'}
                        >
                           
                        </BaseInput>
                    ))}
                </ButtonGrid>
            </Section>

            <Section
                title="BaseInput label top"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<BaseInput variant="${variant}" color="${colorsCustom[i]}">${variant}</BaseInput>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            variant={variant}
                            color={colors[i]}
                            size='sm'
                            
                            placeholder={colorsCustom[i]}
                            labelTop={variant +' '+ colors[i]}
                        >
                           
                        </BaseInput>
                    ))}
                </ButtonGrid>
            </Section>
            
             <Section
                title="BaseInput label mixed"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<BaseInput variant="${variant}" color="${colorsCustom[i]}">${variant}</BaseInput>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            variant={variant}
                            color={colors[i]}
                            size='sm'
                            
                            placeholder={colorsCustom[i]}
                            labelLeft={'🔍︎'}
                            labelRight={'🔍︎'}
                            labelTop={variant +' '+ colors[i]}
                        >
                           
                        </BaseInput>
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoInput.meta = {
    children: {
        values: ['React.ReactNode'],
        type: 'node',
        description: 'Содержимое компонента. Может быть текстом или JSX-элементом.',
    },
    variant: {
        values: Object.keys(variants),
        type: 'enum',
        description: 'Вариант текста, определяющий стиль и размер.',
    },
    className: {
        values: ['string'],
        type: 'string',
        description: 'Дополнительные CSS классы для компонента.',
    },
    style: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: 'Инлайн-стили, применяемые к компоненту.',
    },
    fontStyle: {
        values: ['normal', 'italic'],
        type: 'enum',
        description: 'Стиль шрифта: обычный или курсив.',
    },
    fontFamily: {
        values: Object.keys(variants),
        type: 'enum',
        description: 'Название шрифта из набора доступных семейств.',
    },
    fontSize: {
        values: ['string', 'number'],
        type: 'union',
        description: 'Размер шрифта (например, 16 или "1.2rem").',
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl'],
        type: 'enum',
        description: 'Размер тени текста.',
    },
    colorShadow: {
        values: ['string'],
        type: 'string',
        description: 'Цвет тени текста (например, "rgba(0,0,0,0.3)").',
    }
}