import Indicator from '@/components/utils/indicator';
import Avatar from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';

const positions = ["top", "middle", "bottom"];
const alignts = ["start", "center", "end"];


export default function InfoIndicator(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* image */}
            <Section 
                title="Indicator" 
                description="кнопка" 
                code={`<Indicator variant='round' size='sm' src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'></Indicator>`}
            >
                <div className="flex justify-center">
                    <Indicator
                        className='badge badge-success'
                        content={'new'}
                    >
                        <Avatar
                            size='lg'
                            src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                        />
                    </Indicator>
                </div>
            </Section>

            {/* positions */}
            <Section
                title="Indicator position"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Indicator size="${size}" shadow="sm">${size}</Indicator>`)
                    .join('\n')}
            >
               <div className="flex justify-center items-center">
                    {positions.map((pos, i) => (
                        <div key={i} className="flex m-5 flex-col justify-center items-center">
                            <Indicator
                                className='badge badge-success'
                                content={pos}
                                position={pos}
                                shadow='lg'
                            >
                                <Avatar
                                    size='lg'
                                    src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                                />
                            </Indicator>
                        </div>
                    ))}
                </div>
            </Section>

            {/* alignts */}
            <Section
                title="Indicator alignts"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Indicator size="${size}" shadow="sm">${size}</Indicator>`)
                    .join('\n')}
            >
               <div className="flex justify-center items-center">
                    {alignts.map((al, i) => (
                        <div key={i} className="flex m-5 flex-col justify-center items-center">
                            <Indicator
                                className='badge badge-warning'
                                content={al}
                                align={al}
                                shadow='lg'
                            >
                                <Avatar
                                    size='lg'
                                    src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                                />
                            </Indicator>
                        </div>
                    ))}
                </div>
            </Section>

            {/* custom class */}
            <Section 
                title="Indicator custom class content" 
                description="кнопка" 
                code={`<Indicator variant='round' size='sm' src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'></Indicator>`}
            >
                <div className="flex justify-center">
                    <Indicator
                        className='rounded-b-xl border-2 bg-[#343434] p-1 mt-1 text-xs text-center text-green-500'
                        content={'1'}
                    >
                        <Avatar
                            size='lg'
                            src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                        />
                    </Indicator>
                </div>
            </Section>

            {/* multi */}
            <Section 
                title="Indicator multi contents" 
                description="кнопка" 
                code={`<Indicator variant='round' size='sm' src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'></Indicator>`}
            >
                <div className="flex justify-center">
                    <Indicator
                        content={[
                            ...positions.flatMap((pos) =>
                                alignts.map((al) => ({
                                    content: '●',
                                    position: pos,
                                    className: 'badge badge-success badge-dash hover:bg-[#67f667] cursor-pointer',
                                    align: al,
                                }))
                            )
                        ]}
                    >
                        <Avatar
                            size='lg'
                            src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                        />
                    </Indicator>
                </div>
            </Section>
        </div>
    );
}


InfoIndicator.meta = {
    ...baseMeta,
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Контент внутри компонента. Будет обернут `content`.'
    },
    content: {
        values: ['ItemIndicator[]', 'React.ReactNode'],
        type: 'enum',
        description: 'Оборачивает `children`.'
    },
    position: {
        values: ["top", "middle", "bottom"],
        type: 'enum',
        default: 'top',
        description: ''
    },
    align: {
        values: ["start", "center", "end"],
        type: 'enum',
        default: 'end',
        description: ''
    }
}