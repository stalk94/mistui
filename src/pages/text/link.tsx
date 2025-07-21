import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { Link } from '@/components/text';



export default function InfoMarque(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="Link" description="кнопка"
                code={`<Link>'This converter creates fancy symbols. The explanation starts with unicode; an industry standard which'</Link>`}
            >
                <div className="flex justify-center">
                    <Link variant='caption'>
                        1 This converter creates fancy symbols. 2The explanation starts with unicode; an industry standard which
                    </Link>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Link variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<Link variant="${variant}">${variant}</Link>`)
                    .join('\n')
                }
            >
                 <div className="flex justify-center">
                    <Link variant='caption' color='lightgray'>
                        1 This converter creates fancy symbols
                    </Link>
                </div>
            </Section>


            {/* custom color */}
            <Section
                title="Link custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Link variant="${variant}" color="${colorsCustom[i]}">${variant}</Link>`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center flex-col">
                    {variants.map((variant, i) => (
                        <div className="flex flex-col m-auto">
                            <Link
                                key={variant}
                                variant={variant}
                                color={colorsCustom[i]}
                                tracking='tighter'
                            >
                                {variant}
                            </Link>
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