import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';
import FlagCountry, { COUNTRY_CODES } from '@/components/utils/flag';

//////////////////////////////////////////////////////////////////////////
const flags10 = COUNTRY_CODES.slice(0, 10);
export const maskClasses = [
    'mask-heart', 'mask-squircle',
    'mask-hexagon', 'mask-hexagon-2', 'mask-decagon', 'mask-pentagon', 
    'mask-diamond', 'mask-circle', 
    'mask-star', 'mask-star-2', 
    'mask-triangle', 'mask mask-triangle-2', 'mask-triangle-3', 'mask-triangle-4'
];
const sizesf = [...sizes, 50, 100, 200];
function chunkArray(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
}
//////////////////////////////////////////////////////////////////////////


export default function InfoMask(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="SVG icons country flag"
                code={`<Flag code="US" size="sm" />`}
            >
                <div className="flex justify-center">
                    {flags10.map((f, i) => (
                        <FlagCountry
                            className="mr-3"
                            key={f}
                            code={f}
                            size="sm"
                        />
                    ))}
                </div>
            </Section>

            <Section
                title="Sizes"
                description="xs, sm, md, lg, xl and custom size values (e.g. 50, 100, 200)"
                code={sizesf
                    .map(
                        (s, i) =>
                            `<Flag code="${flags10[i]}" size="${s}" />`
                    )
                    .join('\n')
                }
            >
                <div className="flex justify-center">
                    {sizesf.map((s, i) => (s !== 'auto' &&
                        <FlagCountry
                            className="mr-3"
                            key={s}
                            code={flags10[i]}
                            size={s}
                        />
                    ))}
                </div>
            </Section>
            
            {/* mask */}
            <Section
                title="Mask"
                description="Use mask-* classes from DaisyUI to shape the flag"
                code={maskClasses
                    .map(
                        (m, i) =>
                            `<Flag className="mask ${m}" code="${COUNTRY_CODES[i]}" size={64} />`
                    )
                    .join('\n')
                }
            >
                <div className="flex flex-wrap">
                    {maskClasses.map((m, i) => (
                        <FlagCountry
                            className={`mr-3 mask ${m}`}
                            key={m}
                            code={COUNTRY_CODES[i]}
                            size={64}
                        />
                    ))}
                </div>
            </Section>

            {/* all list code country */}
            <Section
                title="codes"
                description="all list code country"
                code={``}
            >
                <div className="flex flex-wrap gap-2 text-xs">
                    {chunkArray(COUNTRY_CODES, 10).map((group, index) => (
                        <div
                            key={index}
                            className="p-2 bg-base-200 rounded whitespace-wrap"
                        >
                            {group.map((code) => code).join('\n')}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


InfoMask.meta = {
    code: {
        values: [...flags10, '...over 200'],
        type: 'enum',
        description: '254 country variants flag code'
    },
    size: {
        values: [...sizes, 'number'],
        type: 'number',
        default: 'sm',
        description: 'standart variants size(`xs`, `sm`, `md`, `lg`, `xl`), or custom number value'
    },
    style: baseMeta.style,
    className: baseMeta.className
}