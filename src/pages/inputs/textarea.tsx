import { ColorPicker, BaseInput, FileInput, TextArea } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';

export default function InfoTextArea(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            <Section
                title="ColorPicker"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <TextArea placeholder="text area" />
                </div>
            </Section>
        </div>
    );
}


InfoTextArea.meta = {
    ...inputsMeta
}