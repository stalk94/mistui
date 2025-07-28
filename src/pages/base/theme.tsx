import { Button, createTheme, useTheme } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';



export default function InfoTheme(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* default */}
            <Section 
                title="basic" 
                description="" 
                code={`
                    const Component =()=> { 
                        const { styles } = useTheme();

                        return (
                            <Button/>
                        );
                    }

                    const App =()=> {
                        return(
                            <ThemeProvider>
                                <Component />
                                ...
                            </ThemeProvider>
                        );
                    }
                `}
            >
                <Grid className="w-120 m-auto">
                    
                </Grid>
            </Section>
        </div>
    );
}


InfoTheme.meta = {
    
}