import { Rating } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoRating(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* базовый */}
            <Section
                title="base"
                description=""
                code={`<Rating />`}
            >
                <div className="flex justify-center">
                    <Rating />
                </div>
            </Section>

            {/* max */}
            <Section
                title="max"
                description=""
                code={`<Rating max={10} />`}
            >
                <div className="flex justify-center">
                    <Rating 
                        max={10}
                    />
                </div>
            </Section>
        </div>
    );
}


InfoRating.meta = {
    ...inputsMeta,
    value: {
        values: ['number'],
        default: 2,
        type: 'number',
        description: 'The current value of the input field.'
    },
    max: {
        values: ['number'],
        default: 5,
        type: 'number',
        description: 'max elements'
    }
}