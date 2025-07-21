import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { MarqueText } from '@/components/text';


export default function InfoMarque() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section title="MarqueText" description="кнопка"
                code={`<MarqueText>'This converter creates fancy symbols. The explanation starts with unicode; an industry standard which'</MarqueText>`}
            >
                <div className="flex justify-center">
                    <MarqueText variant='button'>
                        1 This converter creates fancy symbols. 2The explanation starts with unicode; an industry standard which
                    </MarqueText>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="MarqueText variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<MarqueText variant="${variant}">${variant}</MarqueText>`)
                    .join('\n')
                }
            >
                 <div className="flex justify-center">
                    <MarqueText variant='button'>
                        1 This converter creates fancy symbols
                    </MarqueText>
                </div>
            </Section>


            {/* custom color */}
            <Section
                title="MarqueText custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<MarqueText variant="${variant}" color="${colorsCustom[i]}">${variant}</MarqueText>`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center flex-col">
                    {variants.map((variant, i) => (
                        <div className="flex flex-col m-auto">
                            <MarqueText
                                key={variant}
                                variant='h6'
                                color={colorsCustom[i]}
                                tracking='tighter'
                            >
                                {variant}
                            </MarqueText>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


InfoMarque.meta = {
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