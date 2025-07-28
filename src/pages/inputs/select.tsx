import { Select } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoSelect(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="base"
                description=""
                code={`<ColorPicker 
                        placeholder="select" 
                        items={[
                            'apple',
                            'banana',
                            'egs',
                            'road',
                            'jam',
                            'olive'
                        ]} 
                    />
                `}
            >
                <div className="flex justify-center">
                    <Select
                        size='sm'
                        placeholder="select"
                        items={[
                            'apple',
                            'banana',
                            'egs',
                            'road',
                            'jam',
                            'olive'
                        ]}
                    />
                </div>
            </Section>
        </div>
    );
}


InfoSelect.meta = {
    ...inputsMeta,
    items: {
        values: ['string'],
        type: 'array',
        description: ''
    }
}