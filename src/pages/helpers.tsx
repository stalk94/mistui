import React, { useEffect, useState } from 'react';
import { Button, GroupButton, IconButton } from '@/components/buttons';
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
import { translateText } from '@/editor/helpers/translate';
export { colors, variants, sizes, shadows, textShadows, variantsText } from './meta';
import { GoQuestion } from "react-icons/go";


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
const color = {
    string: '#c8c8c8',
    number: '#9b9bec',
    boolean: '#e570d8',
    array: 'orange',
    object: '#ed5e5e',
    enum: '#48d148',
    func: '#4747cf'
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// todo: #27292e #282C34
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
    const [descr, setDescr] = useState(description);
    const [view, setView] = useState<'view' | 'code'>('view');


    useEffect(()=> {
        const lang = globalStore.lang.get();

        if (description && description.length > 0) {
            translateText(description, lang)
                .then(setDescr)
        }
    }, [title, description]);
    
    
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
                        <GroupButton
                            items={['view', 'code']}
                            size='xs'
                            variant='soft'
                            color='primary'
                            value={view}
                            onChange={setView}
                        />
                    </div>
                )}
            </div>

            <Typography variant="caption" color='#a2a2a2' className={`ml-2`}>
                { descr }
            </Typography>

            {view !== 'code' &&
                <div
                    className={`border-1 p-3 border-[#6b6b6b4b] bg-[#282828] relative overflow-y-auto max-w-full ${className??''}`}
                >
                    {view === 'view' && children}
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
    const curColor = color[type]
    const str = {
        array: 'arr[]',
        object: 'obj{}',
        boolean: 'B ',
        enum: '(...)',
        func: 'ƒ=>',
        number: 'N',
        string: 'str'
    }
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
            //iconLeft={<Icon /> }
            color={curColor}
            variant='ghost'
            size='sm'
        >
            { str[type] }
        </Badge>
    )
}
const Row = ({ metaProp }: {metaProp: MetaProp})=> {
    const [descr, setDescr] = useState(metaProp?.description);

    const parseArg =()=> {
        const length = metaProp.values.length - 1;
        const chek =(name)=> metaProp.default === name;

        return (
            <div className='flex flex-wrap'>
                {
                metaProp.values.map((name, i)=> {
                    if (typeof name === 'object') return(
                        <div key={i} style={{color:color.object}}>
                            <IconButton isRounded variant='ghost'>
                                <GoQuestion color='orange' size={16} />
                            </IconButton>
                            {length > i && <span className='text-[#4a4a4a]'> |&nbsp; </span>}
                        </div>
                    );
                    else if(name?.includes?.('React')) return(
                        <div key={i} style={{color:color.object}}>
                            { name }
                            {length > i && <span className='text-[#4a4a4a]'> |&nbsp; </span>}
                        </div>
                    );
                    else if (color[name]) return(
                        <div key={i} style={{color: color[name]}}>
                            { name }
                            {length > i && <span className='text-[#4a4a4a]'> |&nbsp; </span>}
                        </div>
                    );
                    else return (
                        <div key={i} className={`text-success ${chek(name)?'font-bold':''}`}> `{name}`
                            {length > i && <span className='text-[#505050]'> |&nbsp; </span>}
                        </div>
                    );
                })
                }
            </div>
        )
    }
    useEffect(()=> {
        const description = metaProp?.description;
        const lang = globalStore.lang.get();

        if (description &&  description.length > 0) {
            translateText(description, lang)
                .then(setDescr)
        }
    }, []);


    return ([
        <td className='py-0' key="type"><TypeBadge type={metaProp.type} /></td>,
        <td className='py-0' key="variants">{parseArg()}</td>,
        <td className='py-0' key="default">
            {metaProp.default
                ? <span className='text-[#5edcf5]'>{metaProp.default}</span>
                : <span className='text-[#c8c8c8]'>-</span>}
        </td>,
        <td className='py-0 text-[#c8c8c8]' key="description">{descr}</td>
    ]);
}
export function TypeTable({ preview, meta }: { preview: string, meta: Record<string, MetaProp> }) {

    return (
        <div className="max-h-80 overflow-y-auto shadow-md">
            <table 
                className="table table-fixed w-full text-[11px]"
                style={{ fontFamily: '"Inter", sans-serif', background:'#282828'}}
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
                            <Row metaProp={value}/>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
