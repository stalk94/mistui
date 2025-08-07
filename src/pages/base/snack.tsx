import { SnackbarProvider, Typography } from '@/index';
import { Section, Grid, CodeBlock } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';



export default function InfoSnack(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <CodeBlock
                code={`
                    import { SnackbarProvider,  } from 'mistui-kit';

                    const Component =()=> { 
                        const { addAlert } = useSnackbar();    // child components can use hook  

                        return (
                            <Button
                                shadow='sm'
                                variant='outline'
                                size='md'
                                style={{ margin: 3 }}
                                color='success'
                                onClick={() => addAlert('success', 'text alert message')}
                            >
                                success
                            </Button>
                        );
                    }
                    
                    // application entry point
                    const App = () => (
                        <ThemeProvider>
                            <AlertProvider>
                                <Component />
                                ...
                            </AlertProvider>
                        </ThemeProvider>
                    );
                `}
            />

            <Typography as='div' variant='caption'>
                ⚠️ Notes:
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>AlertProvider must wrap all components that use the `useAlert()` hook </li>
                    <li>The type argument affects icon, color, and behavior of the alert</li>
                </ul>
            </Typography>


            {/* default */}
            <Section 
                title="example of work" 
                description="success, error, info, warning" 
                code={`
                    const Component =()=> { 
                        const { addAlert } = useSnackbar();

                        return (
                            <Button
                                shadow='sm'
                                variant='outline'
                                size='md'
                                style={{ margin: 3 }}
                                color='success'
                                onClick={() => addAlert('success', 'text alert message')}
                            >
                                success
                            </Button>
                        );
                    }

                    const App =()=> {
                        return(
                            <SnackbarProvider>
                                <Component />
                                ...
                            </SnackbarProvider>
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


InfoSnack.meta = {
    children: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'All content React JSX application'
    },
    maxSnack: {
        values: ["number"],
        type: 'number',
        default: 3,
        description: 'max snack message'
    },
}