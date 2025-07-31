import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { Link, Typography } from '@/components/text';
import TypographyInfo from './typography';


export default function InfoMarque(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            <Typography variant='caption' as='div'>
                Link fully inherits all functionality and styling from the Typography component, including props like as, variant, className, style, and more.

                 <ul className='list-disc list-inside ml-4 my-1 mt-2'>
                    <li>Renders as an <code>&lt;a&gt;</code> tag by default (<code>Typography as="a"</code>).</li>
                    <li>Accepts a standard <code>href</code> for traditional links.</li>
                    <li>Supports a custom navigation function via the <code>navigate</code> prop (next router, react-router, etc.).</li>
                    <li>Can disable the anchor tag completely using <code>disableAnchor</code>.</li>
                    <li>Applies <code>link</code> and <code>link-hover</code> classes (when <code>isHover</code> is enabled).</li>
                    <li>Fully supports <code>ref</code> and all native HTML attributes.</li>
                </ul>
            </Typography>

            {/* default */}
            <Section 
                title="base" 
                description="caption link"
                code={`<Link variant='caption'>'This converter creates fancy symbols. The explanation starts with unicode; an industry standard which'</Link>`}
            >
                <div className="flex justify-center">
                    <Link variant='caption' color='primary'>
                        The explanation starts with unicode; an industry standard which
                    </Link>
                </div>
            </Section>

            {/* custom color */}
            <Section
                title="color"
                description="custom color value"
                code={
                    `<Link color='lightgray' variant='caption'>1 This converter creates fancy symbols</Link>`
                }
            >
                 <div className="flex justify-center">
                    <Link variant='caption' color='lightgray'>
                        This converter creates fancy symbols
                    </Link>
                </div>
            </Section>


            {/* variants */}
            <Section
                title="variants"
                description="custom color or all variants"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Link variant="${variant}" tracking='tighter' color="${colorsCustom[i]}">${variant}</Link>`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center flex-col">
                    {variants.map((variant, i) => (
                        <div key={variant} className="flex flex-col m-auto">
                            <Link
                                variant={variant}
                                color={colorsCustom[i]}
                                tracking='tighter'
                            >
                                {variant}
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

            {/* navigate */}
            <Section 
                title="navigate prop" 
                description="optional user router"
                code={`
                    import { useRouter } from 'next/navigation'

                    const router = useRouter()

                    <Link 
                        variant='caption' 
                        href="/profile"
                        navigate={router.push}
                    >
                        Link
                    </Link>
                `}
            >
                <div className="flex justify-center">
                    <Link 
                        color='primary'
                        variant='caption'
                        href="/profile"
                        navigate={console.log}
                    >
                        Link
                    </Link>
                </div>
            </Section>
        </div>
    );
}


InfoMarque.meta = {
    ...TypographyInfo.meta
}