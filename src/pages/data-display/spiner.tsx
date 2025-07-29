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
                code={`
                    <Spiner
                        color='success'
                        size='sm'
                    />
                `}
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
                description="Predefined color palette"
                code={colors
                    .map((color) => `<Progress value={30} size="sm" color="${color}" shadow="sm"/>`)
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
        </div>
    );
}



InfoSpiner.meta = {
    ...baseMeta,
}