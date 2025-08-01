import { ColorPicker } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoColorPicker(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* базовый */}
            <Section
                title="base"
                description=""
                code={`<ColorPicker />`}
            >
                <div className="flex justify-center">
                    <ColorPicker size='sm' />
                </div>
            </Section>

            {/* opener */}
            <Section
                title="open pick pallete"
                description="see example code"
                code={`<ColorPicker openPicker />`}
            >
                <div className="flex justify-center">
                    <ColorPicker size='sm' />
                </div>
            </Section>
        </div>
    );
}


InfoColorPicker.meta = {
    ...inputsMeta,
    openPicker: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Open popup color pallete'
    }
}