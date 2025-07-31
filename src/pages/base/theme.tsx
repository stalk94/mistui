import { Button, createTheme, useTheme, ThemeProvider, Typography } from '@/index';
import { Section, Grid, CodeBlock } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';



export default function InfoTheme(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Typography as='div' variant='caption'>
                <b>ThemeProvider</b> is required for all <b>MistUI</b> components to work properly.
                It provides theming context and accepts a `theme` prop.
               
                Always use `createTheme(settings)` to generate the theme.
                <b>Do not</b> pass a plain object to `ThemeProvider` — it will break the library.
               
                Theme settings include:
                
                <ul className="list-disc list-inside ml-4 my-1">
                    <li><code>themeSchema</code> – base scheme ('dark' or 'light')</li>
                    <li><code>colors.base</code> – base color</li>
                    <li><code>sizes.text</code> – text sizes</li>
                    <li><code>colorVariants</code> – variant colors</li>
                    <li><code>typographyVariants</code> – typography styles</li>
                    <li><code>shadows</code> – shadow presets</li>
                </ul>

                <Typography as='div' className='mt-2' variant='caption'>
                    ⚠️ You can define only the values you need — any missing options will fallback to default theme values!
                </Typography>
            </Typography>
            <CodeBlock
                    code={`
                    import { ThemeProvider, createTheme } from 'mistui-kit';

                    const theme = createTheme({
                        themeSchema: 'dark',
                        colors: { base: 'black' },
                        sizes: {
                            text: {
                                default: 'sm',
                                xs: 'md',
                                ...
                            }
                        },
                        colorVariants: {
                            primary: 'white',
                            secondary: '#ccc',
                            success: 'green',
                            ...
                        },
                        typographyVariants: {
                            h1: 'text-4xl sm:text-5xl md:text-6xl font-bold',
                            h2: 'text-3xl font-semibold'
                            ...
                        },
                        shadows: {
                            xs: '0 1px 2px 1px rgba(1,1,1,0.1)',
                            sm: '0 1px 3px rgba(0,0,0,0.12)',
                            ...
                        }
                    });

                    const App = () => (
                        <ThemeProvider theme={theme}>
                        <Component />
                        </ThemeProvider>
                    );
                `}
            />
        </div>
    );
}


InfoTheme.meta = {
    children: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'All content React JSX application'
    },
    theme: {
        values: ['{themeSchema: dark, colors: { base: black }, ...}'],
        type: 'object',
        description: 'settings object base configure theme'
    }
}