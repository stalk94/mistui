import Spiner from '@/components/utils/spiners';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, spinerVariants } from '../meta';



export default function InfoSpiner(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* basic */}
            <Section
                title="Basic"
                description=""
                code={`
                    <Spiner
                        color='success'
                        size='sm'
                    />
                `}
            >
                <div className="flex justify-center">
                    <Spiner
                        color='success'
                        size='sm'
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description=""
                 code={spinerVariants
                    .map((v) => `<Spiner size="sm" variant="${v}"/>`)
                    .join('\n')}
            >
                <div className="flex justify-center">
                    {spinerVariants.map((v, i) => (
                        <Spiner
                            className='mr-2'
                            key={v}
                            variant={v}
                            size='sm'
                        />
                    ))}
                </div>
            </Section>

            {/* colors */}
            <Section
                title="System colors"
                description="Predefined color palette (or your color)"
                code={colors
                    .map((color) => `<Spiner size="sm" color="${color}"/>`)
                    .join('\n')}
            >
                <Grid>
                    {colors.map((color, i) => (
                        <Spiner
                            key={color}
                            color={color}
                            size='sm'
                        />
                    ))}
                </Grid>
            </Section>

            {/* sizes */}
            <Section
                title="sizes"
                description=""
                code={sizes
                    .map((s) => `<Spiner size="${s}"/>`)
                    .join('\n')}
            >
                <Grid>
                    {sizes.map((s, i) => (
                        <div key={s} className='flex flex-col'>
                            <div>{s}</div>
                            <Spiner
                                size={s}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>
        </div>
    );
}


const { children, shadow, ...rest} = baseMeta;
InfoSpiner.meta = {
    ...rest,
    variant: {
        values: spinerVariants,
        type: 'enum',
        default: 'spinner',
        description: 'Controls the visual style',
    }
}