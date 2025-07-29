import Progress from '@/components/utils/progress';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';



export default function InfoProgress(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* basic */}
            <Section
                title="Basic"
                description=""
                code={`
                    <Progress
                        value={60}
                        color='success'
                        size='sm'
                    />
                `}
            >
                <div className="flex justify-center">
                    <Progress
                        value={60}
                        color='success'
                        size='sm'
                    />
                </div>
            </Section>

            {/* non value */}
            <Section
                title="Indeterminate"
                description="without value"
                code={`
                    <Progress
                        color='success'
                        size='sm'
                    />
                `}
            >
                <div className="flex justify-center">
                    <Progress
                        color='success'
                        size='sm'
                    />
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
                        <Progress
                            key={color}
                            value={10 * i}
                            color={color}
                            size='sm'
                        />
                    ))}
                </Grid>
            </Section>

            {/* custom colors */}
            <Section
                title="Custom colors"
                description="Custom color"
                code={['red', 'orange', '#8ee94e']
                    .map(
                        (v, i) =>
                            `<Progress color="${v}"/>`
                    )
                    .join('\n')}
            >
                <Grid>
                    {['red', 'orange', '#8ee94e'].map((color, i) => (
                        <Progress
                            key={color}
                            value={5 * i}
                            color={color}
                            size='sm'
                        />
                    ))}
                </Grid>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Badge sizes"
                code={sizes
                    .map((size) => `<Progress size="${size}" shadow="sm"/>`)
                    .join('\n')}
            >
                <Grid>
                    {sizes.map((size, i) => (
                        <Progress
                            key={size} 
                            value={10 * i+1}
                            size={size} 
                            color='success'
                            shadow="sm"
                        />
                    ))}
                </Grid>
            </Section>
        </div>
    );
}



InfoProgress.meta = {
    ...baseMeta,
    max: {
        values: ['number'],
        type: 'number',
        default: 100,
        description: ''
    },
    value: {
        values: ['number'],
        type: 'number',
        description: 'The current value of the procent size line.'
    }
}