import { DataTable, ColumnDataTable } from '@/components/tables/index';
import { Section, Grid, CodeBlock } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import Avatar from '@/components/avatar';
import { GrInfo } from "react-icons/gr";
import { Flag, Link, Typography } from '@/index';


const tab = {
    xs: 'xss',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg'
}
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



export default function InfoDataTable(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <Typography variant='caption' style={{color:'#9e9e9e'}}>
                ⚠️ Over time, the implementation will completely eliminate the dependence on PrimeReact. Due to mistakes made by the PrimeReact team, I see no reason to continue supporting it. My own implementation is nearly ready.
            </Typography>

            {/* default */}
            <Section 
                title="List" 
                description="кнопка" 
                code={`
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
                            body={(data) => <Avatar src={data?.image} />}
                        />
                        <ColumnDataTable header="Name" filter filterPlaceholder="По именам" sortable field="name" />
                        <ColumnDataTable
                            header="Rating"
                            sortable
                            field="rating"
                            body={(data) => (
                                <div className='rating rating-xs'>
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
                `}
            >
                <div className="flex justify-center">
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
            </Section>

            
            <Typography>
                DataTable requires a value as an array of objects.
            </Typography>
            <CodeBlock
                code={`
                    <DataTable
                        value={[
                            { name: "Amy Elsner", country: 'RU', ... }
                        ]}
                    >
                    </DataTable>
                `}
            />

            {/* column */}
            <Typography variant='h6'>
                {`• ⏸️  <ColumnDataTable> `}
            </Typography>
            <Typography>
                {'Object keys are associated with a value <ColumnDataTable> props `field`, props `header` will be responsible for what you want to display in the table header'}
            </Typography>
            <CodeBlock
                code={`
                    <ColumnDataTable
                        field='name'            // <-
                        header='Name'           // what will we show in thead table column
                    />
                    <ColumnDataTable
                        field='country'         // <-
                        header='Country'           
                    />
                `}
            />
            {/* column body */}
            <Typography>
                {'`body` you can pass your custom table cell render props component here. As an argument `data` each cell gets its data'}
            </Typography>
            <CodeBlock
                code={`
                    <ColumnDataTable
                        field='name'   
                        body={(data) => (
                            <Avatar 
                                src={data?.image} 
                            />
                        )}         
                    />
                `}
            />

            <Typography variant='h6'>
                • ↕️ Sortable
            </Typography>
            {/* sorting */}
            <Typography>
                Enabling sortable property at column component would be enough to make a column sortable. The property to use when sorting is field by default and can be customized using sortField
            </Typography>
            <CodeBlock
                code={`
                    <ColumnDataTable field="name" header="Name" sortable/>
                `}
            />
            <Typography>
                In case you'd like to display the table as sorted per a single column by default on mount, use sortField and sortOrder properties in Controlled or Uncontrolled manner. In controlled mode, sortField, sortOrder and onSort properties need to be defined to control the sorting state.
            </Typography>
            <CodeBlock
                code={`
                    import { DataTable, ColumnDataTable } from 'mistui-kit';

                    const data = [
                        { name: 'Alice', country: 'USA', rating: 5, quantity: 10 },
                        { name: 'Bob', country: 'Germany', rating: 3, quantity: 5 },
                        { name: 'Charlie', country: 'France', rating: 4, quantity: 8 },
                    ];

                    export default function SortableTableExample() {
                        const [sortField, setSortField] = useState<string | undefined>();
                        const [sortOrder, setSortOrder] = useState<number | undefined>();

                        const handleSort = (e: any) => {
                            setSortField(e.sortField);
                            setSortOrder(e.sortOrder);
                        };

                        return (
                            <DataTable
                                value={data}
                                sortField={sortField}
                                sortOrder={sortOrder}
                                onSort={handleSort}
                                className="w-full"
                            >
                                <ColumnDataTable field="name" header="Name" sortable />
                                <ColumnDataTable field="country" header="Country" sortable />
                                <ColumnDataTable field="rating" header="Rating" sortable />
                                <ColumnDataTable field="quantity" header="Quantity" sortable />
                            </DataTable>
                        );
                    }
                `}
            />

            {/* multisort */}
            <Typography variant='subtitle1'>
               🔀 multisort
            </Typography>

             <Typography>
                By default sorting is executed on the clicked column only. To enable multiple field sorting, set sortMode property to "multiple" and use metakey when clicking on another column.
            </Typography>
            <CodeBlock
                code={`
                    <DataTable value={data} sortMode="multiple">
                `}
            />
            <CodeBlock
                code={`
                    const [multiSortMeta, setMultiSortMeta] = useState([
                        { field: 'country', order: 1 },     // order: 1 - ascending
                        { field: 'name', order: -1 }        // order: -1 - in descending order
                    ]);

                    <DataTable
                        value={data}
                        sortMode="multiple"
                        multiSortMeta={multiSortMeta}
                        onSort={(e) => setMultiSortMeta(e.multiSortMeta)}
                    >
                        <ColumnDataTable field="country" header="Country" sortable />
                        <ColumnDataTable field="name" header="Name" sortable />
                        <ColumnDataTable field="rating" header="Rating" sortable />
                    </DataTable>
                `}
            />

            <Typography variant='h6'>
                • 🧼 Filtration
            </Typography>

            <Typography>
                filter — enables filtering by column. You can configure filterPlaceholder for the placeholder.
            </Typography>
            <CodeBlock
                code={`
                    <ColumnDataTable
                        field="name"
                        header="Name"
                        filter
                        filterPlaceholder="Search by name"
                    />
                `}
            />

            <Typography>
                When filterDisplay is set as menu, filtering is done via popups with support for multiple constraints and advanced templating.
                Instead of the standard filter, you can use any of your own elements (for example, InputNumber, Select, Slider, etc.) via the filterElement prop.
            </Typography>
            <CodeBlock
                code={`
                    const [filters, setFilters] = useState({
                        name: { value: '', matchMode: 'contains' }
                    });

                    const nameFilterElement = (
                        <BaseInput
                            value={filters.name.value}
                            onChange={(e) => {
                                setFilters((prev) => ({
                                    ...prev,
                                    name: { ...prev.name, value: e.target.value }
                                }));
                            }}
                            placeholder="Search name"
                        />
                    );

                    <DataTable
                        value={data}
                        filters={filters}
                        filterDisplay="menu"        // or "row" for inline
                    >
                        <ColumnDataTable
                            field="name"
                            header="Name"
                            filter
                            filterElement={nameFilterElement}
                        />
                    </DataTable>
                `}
            />

            <Typography>
                ⚙️ matchMode - variants
            </Typography>
            <Typography as='div' variant='caption'>
                <ul className='list-disc list-inside ml-4'>
                    <li>startsWith</li>
                    <li>contains</li>
                    <li>endsWith</li>
                    <li>equals</li>
                    <li>notEquals</li>
                    <li>in</li>
                    <li>lt / lte / gt / gte (for number)</li>
                </ul>
            </Typography>

            <Typography variant='h6'>
                • 🧩 Edit mod 
            </Typography>
            <Typography>
                in development
            </Typography>

            {/* sizes */}
            <Section
                title="DataTable sizes"
                description=""
                code={`
                    <DataTable
                        size='xs'    // or sm, md, lg, xl
                    ...
                `}
            >
                <div className="flex flex-col justify-center items-center">
                    {sizes.map((size) => (
                        <div key={size} className="flex min-w-80 flex-col border-1 rounded border-[#535353] mb-2">
                            <DataTable
                                size={size}
                                value={[testData[1]]}
                                header={
                                    <div>
                                        {size}
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
                                    body={(data) => <Avatar size={tab[size]} src={data?.image} />}
                                />
                                <ColumnDataTable header="Name" filter filterPlaceholder="По именам" sortable field="name" />
                                <ColumnDataTable header="Data" sortable field="data" />
                                <ColumnDataTable
                                    header="Country"
                                    sortable
                                    field="country"
                                    body={(data) => <Flag size={size} code={data?.country} />}
                                />
                            </DataTable>
                        </div>
                    ))}
                </div>
            </Section>

            <Typography variant='caption' fontStyle='italic'>
                The component is built on top of the powerful <i>primereact</i> DataTable and greatly simplifies its integration into your design system.  
                It wraps the original component, solves common layout issues (like scroll and sizing), provides sensible defaults, connects to the central theme context, and simplifies initial setup and styling.
                <br />
                More advanced use cases and detailed configuration options can be found in the original documentation:{" "}
                <Link variant='caption' color='info' href="https://primereact.org/datatable/">
                    learn more
                </Link>
            </Typography>
        </div>
    );
}


InfoDataTable.meta = {
    children: {
        values: ['ColumnDataTable'],
        type: 'array',
        description: '<ColumnDataTable> component array'
    },
    value: {
        values: ['object'],
        type: 'array',
        description: 'An array of objects to display.'
    },
    header: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'Custom header component'
    },
    footer: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'Custom footer component'
    },
    responsiveLayout: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Defines the responsive mode, valid options are "stack" and "scroll".'
    },
    paginator: {
        values: ['boolean'],
        type: 'boolean',
        description: 'When specified as true, enables the pagination.'
    },
    isAutoPagination: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Switches to paginated mode automatically when more than 20 items are present.'
    },
    rows: {
        values: ['number'],
        type: 'number',
        description: 'Number of rows to display per page.'
    },

    // sort
    sortMode: {
        values: ['single', 'multiply'],
        type: 'enum',
        default: 'single',
        description: ''
    },
    sortField: {
        values: ['string'],
        type: 'string',
        description: 'Name of the field to sort data by default.'
    },
    sortOrder: {
        values: ['number'],
        type: 'number',
        description: 'Order to sort the data by default.'
    },
    multiSortMeta: {
        values: [`{ field: string, order: 1 | -1 }`],
        type: 'array',
        description: 'Defines multiple sort conditions when multi-column sorting is enabled.'
    },

    // filter
    filterDisplay: {
        values: ['row', 'menu'],
        type: 'enum',
        default: 'row',
        description: 'Defines how filters are displayed: in a row under headers or inside dropdown menus.'
    },
    filters: {
        values: [`[fieldName]: {value: string | number | boolean | Date, matchMode: 'contains' | 'startsWith' | 'equals' | 'in' | ...}`],
        type: 'array',
        description: 'Defines the current filtering state for each column.'
    },

    // edit mode
    selectOnEdit: {
        values: ['boolean'],
        default: 'true',
        type: 'boolean',
        description: 'Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.'
    },
    editMode: {
        values: ['cell', 'row'],
        type: 'enum',
        default: 'cell',
        description: 'Defines editing mode, options are "cell" and "row".'
    },

    // base
    size: {
        values: ['xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: ''
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        type: 'enum',
        description: ''
    },
}