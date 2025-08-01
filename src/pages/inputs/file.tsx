import { FileInput } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';

// image/png, image/jpeg video/* image/*
export default function InfoFile(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            
            <Section
                title="basic"
                description=""
                code={`<FileInput size='sm' placeholder="pick file" />`}
            >
                <div className="flex justify-center">
                    <FileInput className='w-80' size='sm' placeholder="pick file" />
                </div>
            </Section>
        </div>
    );
}


InfoFile.meta = {
    ...inputsMeta,
    onChange: {
        values: ['(file: File)=> void'],
        type: 'func',
        description: 'A function called when a file loaded.'
    },
    accept: {
        values: ['string'],
        type: 'string',
        description: 'The accept attribute takes as its value a comma-separated list of one or more file types, or unique file type specifiers, describing which file types to allow.'
    },
    maxSize: {
        values: ['number'],
        type: 'number',
        description: 'Max size file, indicated in megabytes. (0.5 - half mb)'
    }
}