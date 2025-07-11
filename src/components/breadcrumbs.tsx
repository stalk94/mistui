import { useMemo } from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';

////////////////////////////////////////////////////////////////////////////////
type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>;
export type Breadcrumb = {
    label: string;
    href: string;
    isLast: boolean;
}
export type Options = {
    /** Карта человекочитаемых названий */
    nameMap?: Record<string, string>;
    /** Исключить сегменты (например, 'edit', 'id') */
    exclude?: string[];
    /** Начальный сегмент */
    base?: { 
        label: React.ReactElement | string
        href: string 
    }
}
export type BreadcrumbsNavProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    pathname: string
    push: (href: string) => void
    nameMap?: Record<string, string>
    separator?: string | React.ReactNode
    linkStyle?: React.CSSProperties
    Link: React.ComponentType<{ href: string; children: React.ReactNode }>
    style?: React.CSSProperties 
}
////////////////////////////////////////////////////////////////////////////////

export function useBreadcrumbs(pathname: string, options?: Options) {
    const { nameMap = {}, exclude = [], base } = options || {};

    return useMemo(() => {
        const segments = pathname.split('/').filter(Boolean).filter(seg => !exclude.includes(seg));

        const crumbs: Breadcrumb[] = segments.map((seg, i) => {
            const href = '/' + segments.slice(0, i + 1).join('/');
            const label = nameMap[seg] || decodeURIComponent(seg).replace(/[-_]/g, ' ');
            return {
                label,
                href,
                isLast: i === segments.length - 1,
            };
        });

        if (base) {
            return [{ ...base, isLast: false }, ...crumbs];
        }

        return crumbs;
    }, [pathname, nameMap, exclude, base]);
}


export default function BreadcrumbsNav({ 
    pathname, 
    size, 
    push, 
    Link, 
    separator, 
    nameMap,
    style
}: BreadcrumbsNavProps) {
    const sizes = size ? `text-${size}`: 'text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl';
    const sizesIcon = size ? {xs:'h-4', sm:'h-4', md:'h-5', lg:'h-6', xl:'h-6'}: 'h-4 sm:h-4 md:h-5 lg:h-5.5 xl:h-6';

    const crumbs = useBreadcrumbs(pathname, {
        nameMap,
        base: { 
            label: (
                <HomeIcon
                    className={`
                        fill-current ${sizesIcon}  
                        text-neutral-500
                        hover:text-red-400
                    `}
                />
            ),
            href: '/' 
        },
    });
    

    return (
        <div 
            style={style}
            className={`
                breadcrumbs 
                no-separator
                ${sizes}
                border-0
            `}
        >
            <ul>
                {crumbs.map((segment, index) =>
                    segment.isLast
                    ?(
                        <li 
                            className='text-neutral-500'
                            key={segment.href}
                            style={{ pointerEvents: 'none' }}
                        >
                            { segment.label }
                        </li>
                    )
                    :(
                        <li 
                            className='text-neutral-500'
                            key={segment.href}
                        >
                            <Link
                                href={segment.href}
                            >
                                <span className='underline decoration-1 underline-offset-2'>
                                    { segment.label }
                                </span>
                            </Link>
                            {/* separator */}
                            <span
                                className={`
                                mx-2
                                text-neutral-600
                            `}
                                style={{ pointerEvents: 'none' }}
                            >
                                { separator ?? '›' }
                            </span>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}