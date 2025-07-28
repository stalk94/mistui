import { Typography } from "@/components/text";

export default function Install() {


    return (
        <main className="flex flex-col h-full w-full space-y-2 p-8">
            <Typography>
                You need Node.js and Tailwind CSS installed.
            </Typography>

            <Typography className='mt-2'>
                1. Install mistUI as a Node package:
            </Typography>
            
            <div className="w-full bg-black p-4">
                <pre>
                    <code>
                        npm i mistui
                    </code>
                </pre>
            </div>

        </main>
    );
}