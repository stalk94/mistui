import { SnackbarProvider, Typography, hooks } from '@/index';
import { Section, Grid, CodeBlock } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';



export default function InfoHooks(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <CodeBlock
                code={`
                    import { hooks } from 'mistui-kit';

                    
                `}
            />

        </div>
    );
}


InfoHooks.meta = {
}