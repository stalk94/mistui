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
import { AiOutlineFunction } from "react-icons/ai";

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


/////////////////////////////////////////////////////////////////////////////////////////////////////////
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


type TypeVariants = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'enum' | 'func';
type MetaProp = {
    default?: string, 
    description: string 
    type: TypeVariants 
    values: TypeVariants[] | MetaProp[]
}
const TypeBadge =({ type }: {type: TypeVariants})=> {
    const curColor = {
        string: 'gray',
        number: '#8484e9',
        boolean: '#e570d8',
        array: '#f16767',
        object: 'orange',
        enum: '#48d148',
        func: '#3333e9'
    }[type]
    const Icon = {
        string: AiOutlineFieldString,
        number: GoNumber,
        boolean: PiTextB,
        array: MdDataArray,
        object: MdDataObject,
        enum: CgMenuMotion,
        func: AiOutlineFunction
    }[type];
    

    return (
        <Badge
            iconLeft={<Icon />}
            color={curColor}
            variant='ghost'
            size='md'
        >
            { type }
        </Badge>
    )
}
export function TypeTable({ preview, meta }: { preview: string, meta: Record<string, MetaProp> }) {
    const render = (metaProp: MetaProp): JSX.Element[] => {
        if (metaProp.type === 'string'
            || metaProp.type === 'number'
            || metaProp.type === 'enum'
            || metaProp.type === 'boolean'
        ) return [
            <td key="type"><TypeBadge type={metaProp.type} /></td>,
            <td key="variants">{metaProp.values.join(' | ')}</td>,
            <td key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td key="description">{metaProp.description}</td>
        ];
        else if (metaProp.type === 'func') return [
            <td key="type"><TypeBadge type={metaProp.type} /></td>,
            <td key="variants">{metaProp.values.join(' | ')}</td>,
            <td key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td key="description">{metaProp.description}</td>
        ];
        else if (metaProp.type === 'array') return [
            <td key="type"><TypeBadge type={metaProp.type} /></td>,
            <td key="variants">{metaProp.values.join(' | ')}</td>,
            <td key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td key="description">{metaProp.description}</td>
        ];
        else return [
            <td key="type"><TypeBadge type={metaProp.type} /></td>,
            <td key="variants">{metaProp.values.join(' | ')}</td>,
            <td key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td key="description">{metaProp.description}</td>
        ];
    }


    return (
        <table className="table table-fixed w-full">
            {/* head */}
            <thead className='bg-gray-600'>
                <tr>
                    <th>props name</th>
                    <th>type</th>
                    <th>variants</th>
                    <th>default</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(meta).map(([name, value]) =>
                    <tr key={name}>
                        <th>{name}</th>
                        {render(value)}
                    </tr>
                )}
            </tbody>
        </table>
    );
}
