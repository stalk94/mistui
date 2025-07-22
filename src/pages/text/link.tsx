import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { Link } from '@/components/text';
import TypographyInfo from './typography';


export default function InfoMarque(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="base" description="caption"
                code={`<Link variant='caption'>'This converter creates fancy symbols. The explanation starts with unicode; an industry standard which'</Link>`}
            >
                <div className="flex justify-center">
                    <Link variant='caption'>
                        1 This converter creates fancy symbols. 2The explanation starts with unicode; an industry standard which
                    </Link>
                </div>
            </Section>

            {/* custom color */}
            <Section
                title="color"
                description="custom color value"
                code={
                    `<Link color='lightgray' variant='caption'>1 This converter creates fancy symbols</Link>`
                }
            >
                 <div className="flex justify-center">
                    <Link variant='caption' color='lightgray'>
                        1 This converter creates fancy symbols
                    </Link>
                </div>
            </Section>


            {/* variants */}
            <Section
                title="variants"
                description="custom color or all variants"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Link variant="${variant}" tracking='tighter' color="${colorsCustom[i]}">${variant}</Link>`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center flex-col">
                    {variants.map((variant, i) => (
                        <div key={variant} className="flex flex-col m-auto">
                            <Link
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
    ...TypographyInfo.meta
}