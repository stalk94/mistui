import Fab from '@/components/helpers/fab';
import { Section, Grid as ButtonGrid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';
import { Typography } from '@/components/text';
import { IconButton } from '@/components/buttons';
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";



export default function InfoFab(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <Section 
                title="isFlower enable" 
                description="" 
                code={`
                    <Fab
                        isFlower
                        button={
                            <IconButton
                                isRounded
                                color='info'
                                children={<IoChatbubblesOutline />}
                            />
                        }
                        buttonClose={
                            <IconButton
                                isRounded
                                color='error'
                                children={<IoMdClose />}
                            />
                        }
                        children={
                            <>
                                <IconButton
                                    isRounded
                                    color='success'
                                    children={<IoChatbubblesOutline />}
                                />
                                <IconButton
                                    isRounded
                                    color='error'
                                    children={<IoChatbubblesOutline />}
                                />
                                <IconButton
                                    isRounded
                                    color='info'
                                    children={<IoChatbubblesOutline />}
                                />
                                <IconButton
                                    isRounded
                                    color='warning'
                                    children={<IoChatbubblesOutline />}
                                />
                                <IconButton
                                    isRounded
                                    color='secondary'
                                    children={<IoChatbubblesOutline />}
                                />
                            </>
                        }
                    />
                `}
            >
                <Fab
                    isFlower
                    button={
                        <IconButton
                            isRounded
                            color='info'
                            children={<IoChatbubblesOutline />}
                        />
                    }
                    buttonClose={
                        <IconButton
                            isRounded
                            color='error'
                            children={<IoMdClose />}
                        />
                    }
                    children={
                        <>
                            <IconButton
                                isRounded
                                color='success'
                                children={<IoChatbubblesOutline />}
                            />
                            <IconButton
                                isRounded
                                color='error'
                                children={<IoChatbubblesOutline />}
                            />
                            <IconButton
                                isRounded
                                color='info'
                                children={<IoChatbubblesOutline />}
                            />
                            <IconButton
                                isRounded
                                color='warning'
                                children={<IoChatbubblesOutline />}
                            />
                            <IconButton
                                isRounded
                                color='secondary'
                                children={<IoChatbubblesOutline />}
                            />
                        </>
                    }
                />
            </Section>
        </div>
    );
}


InfoFab.meta = {
    button: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Content button. Can be text or a React element.'
    },
    closeButton: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Content button close. Can be text or a React element.'
    },
    children: baseMeta.children,
    isFlower: {
        values: ['boolean'],
        type: 'boolean',
        default: 'false',
        description: 'Enables fab to make it open in a quarter circle arrangement instead of vertical'
    }
}