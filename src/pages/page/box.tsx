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
                code={``}
            >
                <div className="flex justify-center p-10">
                    <Box className='w-60 h-60' rounded={2}>
                        
                    </Box>
                </div>
            </Section>

        </div>
    );
}


InfoBox.meta = {
    ...baseMeta,
}