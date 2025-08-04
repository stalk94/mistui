import { Form } from '@/components/form';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';
import { Typography } from '@/components/text';


const scheme = [
    { type: 'text', id: 'test', placeholder: 'placeholder', label: 'test', position: 'column', left: 'lf' },
    { type: 'number', id: 'test2', label: 'test', position: 'column', left: 'lf' },
    { type: 'color', id: 'test3', label: 'test', position: 'column' },
    { type: 'select', id: 'test4', label: 'test', position: 'column', items: [{ id: '1', label: 'test' }] },
    { type: 'toggle', id: 'test7', label: 'test', position: 'column', items: [{ id: '1', label: 'test' }] },
    { type: 'slider', id: 'test5', label: 'test', position: 'column' },
    { type: 'switch', id: 'test6', label: 'enable flash', position: 'column' },
    { type: 'checkbox', id: 'test8', label: 'accept' },
];


export default function InfoForm(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <Typography as='div' variant='body2'>
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>🔄 Rerender optimization: if the scheme hasn't changed "in essence", the component won't recreate the fields.</li>
                    <li>🧠 FieldRenderer (memo) — renders a specific input based on type and value. It doesn’t update unless necessary.</li>
                    <li>🏷️ Automatic label position fallback — if field.position is not defined, the global labelPosition is used instead.</li>
                    <li>🔁 onChange — triggered every time any field value changes, passing both id and value.</li>
                </ul>
            </Typography>

            <Section
                title="basic"
                description="..."
                code={`
                    const scheme = [
                        { type: 'text', id: 'test', placeholder: 'placeholder', label: 'test', position: 'column', left: 'lf' },
                        { type: 'number', id: 'test2', label: 'test', position: 'column', left: 'lf' },
                        { type: 'color', id: 'test3', label: 'test', position: 'column' },
                        { type: 'select', id: 'test4', label: 'test', position: 'column', items: [{ id: '1', label: 'test' }] },
                        { type: 'toggle', id: 'test7', label: 'test', position: 'column', items: [{ id: '1', label: 'test' }] },
                        { type: 'slider', id: 'test5', label: 'test', position: 'column' },
                        { type: 'switch', id: 'test6', label: 'enable flash', position: 'column' },
                        { type: 'checkbox', id: 'test8', label: 'accept' },
                    ];

                    <Form
                        scheme={scheme}
                        onChange={console.log}
                    />
                `}
            >
                <div className="max-w-80 m-auto">
                    <Form
                        scheme={scheme}
                        onChange={console.log}
                    />
                </div>
            </Section>
        </div>
    );
}


InfoForm.meta = {
    scheme: {
        values: [],
        type: 'array',
        description: 'An array of field definitions that describe the structure and behavior of the form inputs.'
    },
    onChange: {
        values: [''],
        type: 'func',
        description: 'Callback function triggered when any field value changes. Receives the field id and its new value.'
    },
    labelPosition: {
        values: ['left', 'top', 'right'],
        type: 'enum',
        description: 'Default label position applied to all fields unless overridden individually.'
    }
}