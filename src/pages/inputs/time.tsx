import Time from '@/components/inputs/time';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoTime(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="Date input"
                description=""
                code={`<BaseInput placeholder="date" type='date'/>`}
            >
                <div className="flex justify-center">
                    <Time
                        size='sm'
                    />
                </div>
            </Section>
        </div>
    );
}


InfoTime.meta = {
    ...inputsMeta
}