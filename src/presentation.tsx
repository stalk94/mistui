import {
    Button, IconButton, Badge, NumberInput, CheckBox, Avatar, Flag,
    SwitchBox, AutoComplete, Tabs, DataTable, ColumnDataTable, Divider, Indicator
} from "@/index";
import { colors, colorsCustom, variants, sizes } from './pages/helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';


const vs = ["box", "border", "lift"];
const positions = ["top", "middle", "bottom"];
const alignts = ["start", "center", "end"];
const testData = [
    { name: "Amy Elsner", country: 'RU', rating: 4, data: '03-11-2025', image: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' },
    { name: "John Doe", country: 'US', rating: 5, data: '12-05-2024', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: "Emma Smith", country: 'UK', rating: 3, data: '07-19-2023', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: "Carlos Rodríguez", country: 'ES', rating: 4, data: '11-22-2022', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: "Sofia Müller", country: 'DE', rating: 2, data: '05-14-2021', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: "Luca Moretti", country: 'IT', rating: 5, data: '09-30-2020', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: "Isabelle Dubois", country: 'FR', rating: 3, data: '04-10-2019', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: "Hiroshi Tanaka", country: 'JP', rating: 4, data: '08-27-2025', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: "Chen Wei", country: 'CN', rating: 5, data: '06-13-2024', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { name: "Olga Ivanova", country: 'RU', rating: 2, data: '03-03-2023', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { name: "Pedro Gomez", country: 'MX', rating: 3, data: '01-29-2022', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { name: "Fatima Al-Farsi", country: 'AE', rating: 4, data: '11-05-2021', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { name: "William Johnson", country: 'CA', rating: 5, data: '07-21-2020', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: "Elena Petrova", country: 'RU', rating: 3, data: '02-14-2019', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { name: "Mohammed Hassan", country: 'EG', rating: 2, data: '12-09-2025', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { name: "Aisha Khan", country: 'PK', rating: 4, data: '05-18-2024', image: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { name: "Benjamin Andersson", country: 'SE', rating: 5, data: '08-26-2023', image: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { name: "Laura García", country: 'AR', rating: 3, data: '10-31-2022', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { name: "Nathan Brown", country: 'AU', rating: 4, data: '06-20-2021', image: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { name: "Mia Nilsson", country: 'NO', rating: 2, data: '03-25-2020', image: 'https://randomuser.me/api/portraits/women/19.jpg' }
];
const tab = {
    xs: 'xss',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg'
}


export default function () {
    return (
        <div className="w-full h-screen flex flex-col mt-20">
            <div className="w-full flex justify-center">
                {variants.map((variant, i) => (
                    <Button
                        size="sm"
                        key={variant}
                        variant={variant}
                        color={colorsCustom[i]}
                        shadow="xs"
                        className="mr-2"
                    >
                        {variant}
                    </Button>
                ))}
            </div>
            <div className="w-full flex justify-center mt-2">
                {variants.map((variant, i) => (
                    <IconButton
                        size="sm"
                        key={variant}
                        variant={variant}
                        color={colors[i]}
                        shadow="xs"
                        className="mr-2"
                    >
                        <HomeIcon />
                    </IconButton>
                ))}
            </div>
            <div className="w-full flex justify-center mt-2">
                {variants.map((variant, i) => (
                    <Badge
                        key={variant}
                        size="sm"
                        variant={variant}
                        color={colors[i + 1]}
                        shadow="xs"
                        className="mr-2"
                    >
                        {variant}
                    </Badge>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {colors.slice(0, Math.ceil(colors.length / 2)).map((color) => (
                    <NumberInput
                        key={color}
                        size="sm"
                        color={color}
                        iconEnable
                        placeholder={color}
                    />
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {colors.slice(Math.ceil(colors.length / 2)).map((color) => (
                    <NumberInput
                        key={color}
                        size="sm"
                        color={color}
                        iconEnable
                        placeholder={color}
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {colors.slice(0, Math.ceil(colors.length / 2)).map((color, i) => (
                    <AutoComplete
                        key={color}
                        size="sm"
                        color={colorsCustom[i + 1]}
                        placeholder={color}
                        options={['aa']}
                    />
                ))}
            </div>

            <div className="w-full flex justify-center mt-2">
                {colors.map((color, i) => (
                    <CheckBox
                        key={i}
                        variant="outline"
                        color={color}
                        size="sm"
                        value={true}
                        className="mr-2"
                    />
                ))}
            </div>
            <div className="w-full flex justify-center mt-4">
                {colors.map((color, i) => (
                    <SwitchBox
                        key={i}
                        variant="outline"
                        color={color}
                        size="sm"
                        value={true}
                        className="mr-2"
                    />
                ))}
            </div>

            <Divider className="pt-4">divider</Divider>

            <div className="w-full flex justify-center mt-4">
                {vs.map((v, i) => (
                    <div className="flex justify-center">
                        <Tabs size="sm" variant={v} color={colors[i]} items={[
                            { label: 'tab-1', content: 'Tab content 1' },
                            { label: 'tab-2', content: 'Tab content 2' },
                            { label: 'tab-3', content: 'Tab content 3' },
                        ]} />
                    </div>
                ))}
            </div>
            
            <div className="w-full flex justify-center mt-2">
                <Indicator
                    content={positions.flatMap((pos) =>
                        alignts.map((al) => ({
                            content: '●',
                            position: pos,
                            align: al,
                            className:
                                'badge badge-success badge-dash hover:bg-[#67f667] cursor-pointer',
                        }))
                    )}
                >
                    <Avatar
                        size="lg"
                        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                    />
                </Indicator>
            </div>

            <div className="w-180 h-60 flex justify-center mt-8 ml-100">
                <DataTable
                    size='sm'
                    value={testData}
                    header={
                        <div>
                            header
                        </div>
                    }
                    footer={
                        <div>
                            footer
                        </div>
                    }
                >
                    <ColumnDataTable
                        header="Image"
                        field="image"
                        body={(data) => <Avatar size={tab.sm} src={data?.image} />}
                    />
                    <ColumnDataTable header="Name" filter filterPlaceholder="По именам" sortable field="name" />
                    <ColumnDataTable
                        header="Rating"
                        sortable
                        field="rating"
                        body={(data) => (
                            <div className={`rating rating-xs`}>
                                {[1, 2, 3, 4, 5].slice(0, data.rating).map((_, i) => (
                                    <div
                                        key={i}
                                        className="mask mask-star bg-amber-300"
                                        aria-label="1 star"
                                    />
                                ))}
                            </div>
                        )}
                    />
                    <ColumnDataTable header="Data" sortable field="data" />
                    <ColumnDataTable
                        header="Country"
                        sortable
                        field="country"
                        body={(data) => <Flag size='sm' code={data?.country} />}
                    />
                </DataTable>
            </div>
        </div>
    );
}