import Chat from '@/components/chat';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { Button } from '@/components/buttons';



export default function InfoChat() {
    return (
        <div className="p-6 space-y-8 ">
            {/* image */}
            <Section 
                title="Chat" 
                description="кнопка" 
                code={``}
            >
                <div className="flex justify-center">
                    <>
                        <Chat
                            avatarSrc='https://img.daisyui.com/images/profile/demo/kenobee@192.webp'
                            header={
                                <>
                                    Obi-Wan Kenobi
                                    <time className="text-xs opacity-50">12:45</time>
                                </>
                            }
                            footer='footer'
                            children='Put me on the Council and not make me a Master!??'
                            direction='start'
                        />
                        <Chat
                            avatarSrc='https://img.daisyui.com/images/profile/demo/kenobee@192.webp'
                            header={
                                <>
                                    Obi-Wan Kenobi
                                    <time className="text-xs opacity-50">12:45</time>
                                </>
                            }
                            footer='footer'
                            children='Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes can be restored. Define a stateKey'
                            direction='end'
                        />
                    </>
                </div>
            </Section>

            {/*  */}
            <Section
                title="Chat orientation"
                description="разные размеры"
                code={sizes
                    .map((size) => ``)
                    .join('\n')}
            >
               <div className="flex-col justify-center">
                    
                </div>
            </Section>
        </div>
    );
}


InfoChat.meta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'union',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
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
    direction: {
        values: ["start", "end"],
        type: 'enum',
        description: ''
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