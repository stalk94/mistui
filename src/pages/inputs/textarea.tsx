import { ColorPicker, BaseInput, FileInput, TextArea } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';

export default function InfoTextArea(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            <Section
                title="base"
                description="base"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="max-w-80 m-auto">
                    <TextArea 
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