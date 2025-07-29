import Radial from '@/components/utils/radial-progress';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';



export default function InfoRadial(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* basic */}
            <Section
                title="Basic"
                description=""
                code={`
                    <Radial
                        value={60}
                        color='success'
                        size='sm'
                    >
                        60%
                    </Radial>
                `}
            >
                <div className="flex justify-center">
                    <Radial
                        value={60}
                        color='success'
                        size='sm'
                    >
                        60%
                    </Radial>
                </div>
            </Section>
        </div>
    );
}



InfoRadial.meta = {
    ...baseMeta,
    value: {
        values: ['number'],
        type: 'number',
        description: 'The current value of the procent size line.'
    }
}