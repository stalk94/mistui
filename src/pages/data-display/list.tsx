import List from '@/components/list/base';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { baseMeta, variantMeta } from '../meta';
import { IconButton } from '@/components/buttons';
import { Fragment } from 'react/jsx-runtime';


const items = [
    <Fragment key={1}>
        <div>
            <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" />
        </div>
        <div>
            <div>Ellie Beilish</div>
            <div className="uppercase font-semibold opacity-60">Bears of a fever</div>
        </div>
        <div className='flex'>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </IconButton>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
            </IconButton>
        </div>
    </Fragment>,
    <Fragment key={2}>
        <div>
            <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
        </div>
        <div>
            <div>Dio Lupa</div>
            <div className="uppercase font-semibold opacity-60">Remaining Reason</div>
        </div>
        <div className='flex'>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </IconButton>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
            </IconButton>
        </div>
    </Fragment>
];


export default function InfoList(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section 
                title="basic" 
                description="" 
                code={`
                    <List size='xs'>
                        <Fragment key={1}>
                            <div>
                                <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" />
                            </div>
                            <div>
                                <div>Ellie Beilish</div>
                                <div className="uppercase font-semibold opacity-60">Bears of a fever</div>
                            </div>
                            <div className='flex'>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                </IconButton>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </IconButton>
                            </div>
                        </Fragment>,
                        <Fragment key={2}>
                            <div>
                                <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                            </div>
                            <div>
                                <div>Dio Lupa</div>
                                <div className="uppercase font-semibold opacity-60">Remaining Reason</div>
                            </div>
                            <div className='flex'>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                </IconButton>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </IconButton>
                            </div>
                        </Fragment>
                    </List>
                `}
            >
                <div className="flex justify-center">
                    <List
                        size='xs'
                        children={items}
                    />
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="List sizes"
                description=""
                code={`
                    <List size='xs'>
                        <Fragment key={1}>
                            <div>
                                <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" />
                            </div>
                            <div>
                                <div>Ellie Beilish</div>
                                <div className="uppercase font-semibold opacity-60">Bears of a fever</div>
                            </div>
                            <div className='flex'>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                </IconButton>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </IconButton>
                            </div>
                        </Fragment>,
                        <Fragment key={2}>
                            <div>
                                <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                            </div>
                            <div>
                                <div>Dio Lupa</div>
                                <div className="uppercase font-semibold opacity-60">Remaining Reason</div>
                            </div>
                            <div className='flex'>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                </IconButton>
                                <IconButton
                                    variant='ghost'
                                >
                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </IconButton>
                            </div>
                        </Fragment>
                    </List>
                `}
            >
                <div className="flex flex-col justify-center items-center">
                    {sizes.map((size) => (
                        <div key={size} className="flex flex-col border-1 rounded border-[#535353] mb-2">
                            {size}
                            <List
                                key={size}
                                size={size}
                                children={items}
                            />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


InfoList.meta = {
    ...baseMeta,
    listStyle: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: ''
    },
    classNameList: {
        values: ['string'],
        type: 'string',
        description: '',
    }
}