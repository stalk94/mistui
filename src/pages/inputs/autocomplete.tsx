import { AutoComplete } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';
import { Spinner } from '@/index';


export default function InfoAutoComplete(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="base"
                description=""
                code={`
                    <AutoComplete 
                        size='sm'
                        placeholder="autocomplete"
                        options={[
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
                    <AutoComplete 
                        size='sm'
                        placeholder="autocomplete"
                        options={[
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

            <Section
                title="label"
                description=""
                code={`
                    <AutoComplete 
                        size='sm'
                        placeholder="autocomplete"
                        options={[
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
                    <AutoComplete 
                        size='sm'
                        placeholder="autocomplete"
                        labelTop='search'
                        labelLeft='🔍︎'
                        options={[
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


const {labelRight, ...rest} = inputsMeta;
InfoAutoComplete.meta = {
    ...rest,
    options: {
        values: ['string'],
        type: 'array',
        description: 'array string variantes autocomplete'
    }
}