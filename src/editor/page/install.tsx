import { Typography } from "@/components/text";
import Divider from "@/components/utils/divider";
import { CodeBlock } from "@/pages/helpers";
import { PiWarningCircleBold } from "react-icons/pi";
import { GrInfo } from "react-icons/gr";
import { FaRegClipboard } from "react-icons/fa6";
import { IconButton } from "@/components/buttons";


export default function Install() {


    return (
        <main className="flex flex-col h-full w-full space-y-2 p-8" style={{fontFamily: '"Inter", sans-serif'}}>
            <Typography className='mt-2'>
                1. Install mistUI as a Node package:
            </Typography>
            <Typography variant="caption" className='ml-2 flex' color="#bbbbbb">
                <PiWarningCircleBold size='16' className="mr-2" /> You need to install Node.js first, and optionally Tailwind CSS if you want to use its utility classes.
            </Typography>

            <div className="w-full bg-black p-4 relative">
                <div className="absolute right-2">
                    <IconButton size="xs" variant='ghost' onClick={()=> navigator.clipboard.writeText('npm i mistui-kit')}>
                        <FaRegClipboard />
                    </IconButton>
                </div>
                <pre>
                    <code>
                        npm i mistui-kit
                    </code>
                </pre>
            </div>

            <Typography className='mt-2'>
                2. Wrap your app with a theme provider:
            </Typography>
            <Typography variant="caption" className='ml-2 flex' color="#bbbbbb">
                <PiWarningCircleBold size='16' className="mr-2" /> `ThemeProvider` is required for all components to work properly.
                It provides theming contex.
            </Typography>

            <div>
                <CodeBlock
                    code={`
                        import { ThemeProvider } from 'mistui-kit';

                        // the root of your application
                        const App = () => (
                            <ThemeProvider>
                                ...
                            </ThemeProvider>
                        );
                    `}
                />
            </div>

            <Typography className='mt-2'>
                3. Import the required component:
            </Typography>
            <Typography variant="caption" className='ml-2 flex' color="#bbbbbb">
                <GrInfo size='14' className="mr-2" /> all components are imported from `mistui-kit`
            </Typography>

            <div>
                <CodeBlock
                    code={`
                        import { Button } from 'mistui-kit';
                        import { BaseInput } from 'mistui-kit';
                        import { AppBar } from 'mistui-kit';
                        ...
                        /** or */
                        import * as mistui from 'mistui-kit';
                    `}
                />
            </div>

            <Typography className='mt-2'>
                4. Apply where you need:
            </Typography>
            <div>
                <CodeBlock
                    code={`
                        import { Button, Avatar } from 'mistui-kit';
                        import { BaseInput } from 'mistui-kit';
                        
                        const App = () => (
                            <ThemeProvider>
                                <Button> click me </Button>
                                <BaseInput placeholder='input me'/>
                                <Avatar> HI </Avatar>
                            </ThemeProvider>
                        );
                    `}
                />
            </div>

            <Typography className='mt-2'>
                5. Check out the documentation or try experimenting with the components in the playground 🏁
            </Typography>
            <div className="mt-10">
                <Divider/>
            </div>
        </main>
    );
}