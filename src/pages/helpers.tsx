import React, { useState } from 'react';
import { Button } from '@/components/buttons';
import { Typography } from '@/components/text';
import Badge from '@/components/utils/badge';
import ShikiHighlighter from "react-shiki";
import { AiOutlineFieldString } from "react-icons/ai";
import { GoNumber } from "react-icons/go";
import { PiTextB } from "react-icons/pi";
import { MdDataArray } from "react-icons/md";
import { MdDataObject } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";


const TypeBadge =({ name, type })=> {
    const colors = {
        string: 'gray',
        number: '#8484e9',
        boolean: '#e570d8',
        array: '#f16767',
        object: 'orange',
        tuple: '#48d148'
    }
    const Icon = {
        string: AiOutlineFieldString,
        number: GoNumber,
        boolean: PiTextB,
        array: MdDataArray,
        object: MdDataObject,
        tuple: CgMenuMotion
    }[type];


    return (
        <Badge
            iconLeft={<Icon />}
            color={colors[type]}
            variant='ghost'
            size='md'
        >
            { name }
        </Badge>
    )
}


export const colors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];
export const variants = ['contained', 'outline', 'dash', 'soft', 'ghost', 'link'];
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'auto'];
export const shadows = ['xs', 'sm', 'md', 'lg', 'xl'];
export const textShadows = ['xs', 'sm', 'md', 'lg', 'xl'];
export const variantsText = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline', 'button']
export const colorsCustom = [
    '#A155B9', // Lavender Plum
    '#E26D5A', // Coral Clay
    '#4ECDC4', // Mint Teal
    '#FFADAD', // Soft Rose
    '#9A031E', // Crimson Red
    '#6A994E',  // Olive Green
    '#FFB627', // Golden Sun
    '#1B9AAA', // Ocean Blue
    '#F46036', // Sunset Orange
    '#2E294E', // Deep Indigo
    '#A2D2FF', // Baby Blue
    '#F7B32B', // Mustard Yellow
    '#5D2E8C'  // Royal Purple
];



export function CodeBlock({ code }) {
    return (
        <ShikiHighlighter
            showLanguage={true}
            language="ts"
            theme='one-dark-pro'
            className='shadow-sm'
            style={{
                fontSize: 12,
                fontFamily: 'JetBrains Mono, monospace'
            }}
        >
            { code.trim() }
        </ShikiHighlighter>
    );
}
export function Grid({ children, className }: { children: React.ReactNode, className?: HTMLDivElement['className']}) {
    return <div className={`flex flex-wrap justify-center gap-2 ${className ?? ''}`}>{children}</div>;
}
export function Section({
    title,
    description,
    children,
    code,
}: {
    title: string;
    description: string;
    children: React.ReactNode;
    code?: string;
}) {
    const [view, setView] = useState<'preview' | 'code'>('preview');

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <Typography variant="">{`# ${title}`}</Typography>
                {code && (
                    <div className="flex gap-2">
                        <Button
                            size="xs"
                            variant={view === 'preview' ? 'contained' : 'dash'}
                            onClick={() => setView('preview')}
                        >
                            View
                        </Button>
                        <Button
                            size="xs"
                            variant={view === 'code' ? 'contained' : 'dash'}
                            onClick={() => setView('code')}
                        >
                            Code
                        </Button>
                    </div>
                )}
            </div>

            <Typography variant="caption" className="text-gray-500">
                {description}
            </Typography>

            {view !== 'code' &&
                <div
                    className="border-1 p-3 rounded-md border-[#4f4f4f] bg-[#696a6c43] relative overflow-auto"
                >
                    {view === 'preview' && children}
                </div>
            }

            {view === 'code' && code && (
                <CodeBlock code={code} />
            )}
        </div>
    );
}
