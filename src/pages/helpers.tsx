import React, { useState } from 'react';
import { Button, IconButton } from '@/components/buttons';
import { motion } from "framer-motion";
import { Typography, Link } from '@/components/text';
import Badge from '@/components/utils/badge';
import ShikiHighlighter from "react-shiki";
import { AiOutlineFieldString } from "react-icons/ai";
import { GoNumber } from "react-icons/go";
import { PiTextB } from "react-icons/pi";
import { MdDataArray } from "react-icons/md";
import { MdDataObject } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineFunction } from "react-icons/ai";
import { formatCodeForShiki } from '@/editor/helpers/dom';
export { colors, variants, sizes, shadows, textShadows, variantsText } from './meta';


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
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <ShikiHighlighter
                showLanguage={true}
                language="tsx"
                theme='one-dark-pro'
                className='shadow-sm'
                delay={100}
                style={{
                    fontSize: 14,
                    fontFamily: 'JetBrains Mono, monospace'
                }}
            >
                { formatCodeForShiki(code) }
            </ShikiHighlighter>
        </motion.div>
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
    className
}: {
    title: string;
    description: string;
    children: React.ReactNode;
    code?: string;
    className?: string
}) {
    const [view, setView] = useState<'preview' | 'code'>('preview');

    return (
        <div className="space-y-2 shadow-sm border-1 border-[#80808020] rounded-sm p-1">
            <div className="flex items-center justify-between">
                <div className='flex items-center'>
                    <button
                        children='#'
                        className='mr-1 btn btn-ghost p-2'
                    />
                    <Typography variant=''>{`${title.charAt(0).toUpperCase() + title.slice(1)}`}</Typography>
                </div>
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

            <Typography variant="caption" className={`text-gray-500 ml-2`}>
                {description}
            </Typography>

            {view !== 'code' &&
                <div
                    className={`border-1 p-3 rounded-md border-[#6b6b6b4b] bg-[#27292e] relative overflow-auto ${className??''}`}
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
        union: CgMenuMotion,
        func: AiOutlineFunction
    }[type];
    

    return (
        <Badge
            iconLeft={<Icon /> }
            color={curColor}
            variant='outline'
            size='sm'
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
            <td className='py-0' key="type"><TypeBadge type={metaProp.type} /></td>,
            <td className='py-0' key="variants">{metaProp.values.join(' | ')}</td>,
            <td className='py-0' key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td className='py-0' key="description">{metaProp.description}</td>
        ];
        else if (metaProp.type === 'func') return [
            <td className='py-0' key="type"><TypeBadge type={metaProp.type} /></td>,
            <td className='py-0' key="variants">{metaProp.values.join(' | ')}</td>,
            <td className='py-0' key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td className='py-0' key="description">{metaProp.description}</td>
        ];
        else if (metaProp.type === 'array') return [
            <td className='py-0' key="type"><TypeBadge type={metaProp.type} /></td>,
            <td className='py-0' key="variants">{metaProp.values.join(' | ')}</td>,
            <td className='py-0' key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td className='py-0' key="description">{metaProp.description}</td>
        ];
        else return [
            <td className='py-0' key="type"><TypeBadge type={metaProp.type} /></td>,
            <td className='py-0' key="variants">{metaProp.values.join(' | ')}</td>,
            <td className='py-0' key="default">
                {metaProp.default
                    ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                    : <span className='text-[#f44c4c]'>-</span>}
            </td>,
            <td className='py-0' key="description">{metaProp.description}</td>
        ];
    }


    return (
        <div className="max-h-80 overflow-y-auto">
            <table 
                className="table table-fixed w-full text-[11px]"
                style={{ fontFamily: '"Inter", sans-serif', background:'#282C34'}}
            >
                {/* head */}
                <thead 
                    className='sticky top-0 bg-[#3f49696d] z-10 shadow-xs'
                    style={{backdropFilter: "blur(14px)"}}
                >
                    <tr>
                        <th className="rounded-tl-md">props name</th>
                        <th>type</th>
                        <th>variants</th>
                        <th>default</th>
                        <th className="rounded-tr-md">description</th>
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
        </div>
    );
}
