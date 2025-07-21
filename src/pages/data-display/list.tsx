import List from '@/components/list/base';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
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
        <div>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </IconButton>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
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
        <div>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            </IconButton>
            <IconButton
                variant='ghost'
            >
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
            </IconButton>
        </div>
    </Fragment>
];


export default function InfoBadge() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section 
                title="List" 
                description="кнопка" 
                code={`<Badge size='sm'>default</Badge>`}
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
                description="разные размеры"
                code={sizes
                    .map((size) => `<Badge size="${size}" shadow="sm">${size}</Badge>`)
                    .join('\n')}
            >
                <div className="flex flex-col justify-center items-center">
                    {sizes.map((size) => (
                        <div className="flex flex-col border-1 rounded border-[#535353] mb-2">
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


InfoBadge.meta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'union',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    title: {
        values: ['string'],
        type: 'string',
        description: 'Заголовок компонента, если предусмотрен.'
    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        type: 'enum',
        description: 'Размер тени компонента.'
    },
    variant: {
        values: ['contained', 'outline', 'dash', 'soft', 'ghost', 'link'],
        default: 'contained',
        type: 'enum',
        description: 'Визуальный стиль компонента.'
    },
    color: {
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    isGradient: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Включает градиентную заливку.'
    },
    selected: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отображает компонент как выбранный.'
    },
    disabled: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отключает компонент.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}