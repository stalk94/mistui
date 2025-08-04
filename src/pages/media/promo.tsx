import { PromoBanner } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';


const items = [
    {
        "title": "ORIENTAL GOLD BALL",
        "buttonText": "detail",
        "description": "The sleek and sizzling Ball comes with gold LED lighting for smart functionalityNew Tuna model with 36 GB RAM, 390 GB storage, and cheap features",
        "images": [
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto"
        ]
    },
    {
        "title": "INCREDIBLE METAL GLOVES",
        "buttonText": "detail",
        "description": "Discover the hateful new Towels with an exciting mix of Aluminum ingredientsStylish Fish designed to make you stand out with rewarding looks",
        "images": [
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto"
        ]
    },
    {
        "title": "GORGEOUS RUBBER MOUSE",
        "buttonText": "detail",
        "description": "Innovative Chips featuring humble technology and Wooden constructionSavor the tangy essence in our Hat, designed for monumental culinary adventures",
        "images": [
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto"
        ]
    },
    {
        "title": "BESPOKE ALUMINUM CHAIR",
        "buttonText": "detail",
        "description": "The Renee Car is the latest in a series of baggy products from Auer - TurcotteThe Clifton Salad is the latest in a series of mad products from Quigley - McDermott",
        "images": [
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto"
        ]
    },
    {
        "title": "LUXURIOUS CONCRETE SHOES",
        "buttonText": "detail",
        "description": "Experience the gold brilliance of our Salad, perfect for quarrelsome environmentsThe cyan Towels combines Honduras aesthetics with Astatine-based durability",
        "images": [
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto",
            "https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto"
        ]
    }
];


export default function InfoPromoBanner(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* default */}
            <Section
                title="Basic"
                description="Basic promo banner"
                code={`
                    const items = [
                        {
                            title: "ORIENTAL GOLD BALL",
                            buttonText: "detail",
                            description: "The sleek and sizzling Ball comes with gold LED lighting...",
                            images: [
                                "https://placehold.co/600x400/353636/gray?text=Promo+image&font=roboto",
                                "... more images ..."
                            ]
                        },
                        {
                            title: "INCREDIBLE METAL GLOVES",
                            buttonText: "detail",
                            description: "Discover the hateful new Towels with an exciting mix...",
                            images: [
                                "https://placehold.co/600x400/353636/gray?text=Promo+image&font=roboto",
                                "... more images ..."
                            ]
                        },
                        // ... other items omitted for brevity
                    ];

                    <PromoBanner items={items} />
                `}
            >
                <Grid className="h-60 w-100 m-auto">
                    <PromoBanner items={items} />
                </Grid>
            </Section>
        </div>
    );
}


const { children, ...rest } = baseMeta;
InfoPromoBanner.meta = {
    ...rest,
    items: {
        type: 'array',
        values: [{
            title: {
                values: ['string'],
                type: 'string',
                description: ''
            },
            buttonText: {
                values: ['string'],
                type: 'string',
                description: ''
            },
            description: {
                values: ['string'],
                type: 'string',
                description: ''
            },
            images: {
                values: ['string'],
                type: 'array',
                description: 'url'
            }
        }],
        description: ''
    },
    button: {
        values: ['ButtonProps'],
        type: 'object',
        description: ''
    },
    onChange: {
        values: [''],
        type: 'func',
        description: ''
    }
}