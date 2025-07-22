import { ColorPicker, BaseInput, FileInput, TextArea } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoFile(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="ColorPicker"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <FileInput className='w-80' size='sm' placeholder="pick file" />
                </div>
            </Section>
        </div>
    );
}


InfoFile.meta = {
    ...inputsMeta
}