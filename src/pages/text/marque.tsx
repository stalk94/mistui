import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { MarqueText } from '@/components/text';
import TypographyInfo from './typography';


export default function InfoMarque(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="base" description="кнопка"
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
                title="variants"
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
                title="custom color"
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
                        <div key={i} className="flex flex-col m-auto">
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
    ...TypographyInfo.meta,
    pxPerSecond: {
        values: ['number'],
        type: 'number',
        default: 100,
        description: ''
    },
    copies: {
        values: ['number'],
        type: 'number',
        default: 4,
        description: ''
    },
    pauseOnHover: {
        values: ['any'],
        type: 'boolean',
        default: 'false',
        description: ''
    },
    gap: {
        values: ['number'],
        type: 'number',
        default: 12,
        description: ''
    }
}