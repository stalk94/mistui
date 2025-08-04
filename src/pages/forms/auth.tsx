import { AuthForm } from '@/components/form';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoFormAuth(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <Section
                title="basic"
                description=""
                code={`
                    
                `}
            >
                <div className="max-w-80 m-auto">
                    <AuthForm

                    />
                </div>
            </Section>
        </div>
    );
}


InfoFormAuth.meta = {
    
}