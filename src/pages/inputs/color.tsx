import { ColorPicker, BaseInput, FileInput, TextArea } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoColorPicker(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* базовый */}
            <Section
                title="base"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <ColorPicker size='sm' placeholder="Выберите цвет" />
                </div>
            </Section>

            <Section
                title="ColorPicker"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    
                </div>
            </Section>
        </div>
    );
}


InfoColorPicker.meta = {
    ...inputsMeta
}