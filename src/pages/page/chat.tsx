import Chat from '@/components/chat';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { Button } from '@/components/buttons';
import { baseMeta, variantMeta } from '../meta';


export default function InfoChat(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* basic */}
            <Section
                title="basic"
                description=""
                code={`
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
                `}
            >
                <div className="flex-col justify-center">
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
                </div>
            </Section>

            {/* */}
            <Section
                title="dialog"
                description=""
                code={`
                    <div>
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
                    </div>
                `}
            >
                <div className="flex justify-center">
                    <div>
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
                    </div>
                </div>
            </Section>
        </div>
    );
}


const { children, ...rest } = baseMeta;
InfoChat.meta = {
    ...rest,
    ...variantMeta,
    direction: {
        values: ['end', 'start'],
        type: 'enum',
        description: 'left or right message position'
    },
    avatarSrc: {
        values: ['string'],
        type: 'string',
        description: 'url image avatar'
    },
    header: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'top signature'
    },
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'base message content'
    },
    footer: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'lower signature'
    },
}