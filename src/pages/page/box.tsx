import Box from '@/components/blocks/box';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


export default function InfoBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

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


InfoBox.meta = {
    ...baseMeta,
}