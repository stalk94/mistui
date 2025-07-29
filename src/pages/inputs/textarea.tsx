import { TextArea } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoTextArea(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            <Section
                title="basic"
                description=""
                code={`
                    <TextArea 
                        size='sm'
                        labelTop='top label'
                        placeholder="text area"
                    />
                `}
            >
                <div className="max-w-80 m-auto">
                    <TextArea 
                        size='sm'
                        labelTop='top label'
                        placeholder="text area"
                    />
                </div>
            </Section>
        </div>
    );
}


InfoTextArea.meta = {
    ...inputsMeta
}