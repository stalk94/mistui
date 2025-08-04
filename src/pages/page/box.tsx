import Box from '@/components/blocks/box';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';
import { Typography } from '@/components/text';


export default function InfoBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <Typography as='div' variant='body2'>
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>⚙️ controlled inset (depression) or outset (elevation) style</li>
                    <li>🕯️ supports smooth elevation simulation via opacity and blur</li>
                    <li>🧱 Acts as a base layout block for building more complex components</li>
                    <li>✅ Variants: contained, glass, neumorph</li>
                    <li>🎨 Supports custom colors and theme variants</li>
                    <li>🕶️ Adjustable shadow depth and neumorphism effect</li>
                </ul>
            </Typography>

            {/*  */}
            <Section 
                title="basic" 
                description="" 
                code={`
                    <Box 
                        className='w-60 h-60' 
                        rounded={12}
                    />
                `}
            >
                <div className="flex justify-center p-10">
                    <Box 
                        className='w-60 h-60' 
                        rounded={4}
                    />
                </div>
            </Section>

            <Section 
                title="elevation" 
                description="" 
                code={`
                    <Box 
                        className='w-60 h-60'
                        rounded={18} 
                        elevation={0.46} 
                        shadowSize={3} 
                    />
                    <Box 
                        className='flex w-60 h-60'
                        rounded={4} 
                        elevation={0.60} 
                        shadowSize={-6} 
                    />
                `}
            >
                <div className="flex justify-center p-10">
                    <Box 
                        className='flex w-60 h-60'
                        rounded={4} 
                        elevation={0.46} 
                        shadowSize={3} 
                    >
                        <div className='m-auto'>
                            shadowSize +
                        </div>
                    </Box>
                    <Box 
                        className='flex w-60 h-60 ml-2'
                        rounded={4} 
                        elevation={0.60} 
                        shadowSize={-6} 
                    >
                        <div className='m-auto'>
                            shadowSize -
                        </div>
                    </Box>
                </div>
            </Section>

            <Section 
                title="neomorph" 
                description="" 
                code={`
                    <Box 
                        className='w-60 h-60'
                        rounded={32} 
                        elevation={0.46} 
                        shadowSize={9} 
                        variant="neumorph"
                    />
                `}
            >
                <div className="flex justify-center p-10">
                    <Box 
                        className='w-60 h-60'
                        rounded={32} 
                        elevation={0.46} 
                        shadowSize={9} 
                        variant="neumorph"
                    />
                </div>
            </Section>
        </div>
    );
}


const {shadow, ...rest} = baseMeta;
InfoBox.meta = {
    ...rest,
    elevation: {
        values: ['number'],
        type: 'number',
        description: 'Controls the intensity of the shadow elevation effect, from 0 (no elevation) to 1 (maximum elevation). Overrides default shadow opacity.'
    },
    shadowSize: {
        values: ['number'],
        type: 'number',
        description: 'Adjusts shadow spread and blur size. Accepts values from -25 to 25, where negative values create inset (depressed) shadows, and positive values create outset (raised) shadows.'
    }
}