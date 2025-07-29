import Date from '@/components/inputs/date';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoDate(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            <Section
                title="Date input"
                description=""
                code={`<DateInput size='sm' />`}
            >
                <div className="flex justify-center">
                    <Date
                        size='sm'
                    />
                </div>
            </Section>
        </div>
    );
}


InfoDate.meta = {
    ...inputsMeta
}