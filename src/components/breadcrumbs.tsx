import { useMemo } from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import { useTheme } from './theme';


////////////////////////////////////////////////////////////////////////////////
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
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto'
    /** @example 'home/catalog/item' */
    pathname: string
    nameMap?: Record<string, string>
    separator?: string | React.ReactNode
    /** container classes */
    className?: HTMLDivElement['className']
    /** first icon classes */
    classNameHomeicon?: HTMLDivElement['className']
    /**
     * render component element navigation
     */
    Link: React.ComponentType<{ href: string; children: React.ReactNode }>
    /** container styles */
    style?: React.CSSProperties 
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
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

// ! чучуть доработать (typography возможно стоит внедрить)
export default function BreadcrumbsNav({ 
    pathname, 
    size, 
    Link, 
    separator, 
    nameMap,
    className,
    classNameHomeicon,
    style,
    color
}: BreadcrumbsNavProps) {
    const { autosizes, variants } = useTheme();
    const sizesText = (size && size !== 'auto') ? `text-${size}`: autosizes.text;
    const sizesIcon = size 
        ? { xs:'h-4', sm:'h-4', md:'h-5', lg:'h-6', xl:'h-6' }[size]
        : 'h-4 sm:h-4 md:h-5 lg:h-5.5 xl:h-6';

    
    const crumbs = useBreadcrumbs(pathname, {
        nameMap,
        base: { 
            label: (
                <HomeIcon
                    className={`
                        fill-current 
                        ${sizesIcon ?? 'h-4 sm:h-4 md:h-5 lg:h-5.5 xl:h-6'}  
                        text-neutral-300
                        hover:text-red-400
                        
                        ${classNameHomeicon ?? ''}
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
                ${sizesText}
                border-0
                ${className ?? ''}
            `}
        >
            <ul>
                {crumbs.map((segment, index) =>
                    segment.isLast
                    ?(
                        <li 
                            className='text-neutral-200'
                            key={segment.href}
                            style={{
                                color: (variants[color] ?? color), 
                                pointerEvents: 'none' 
                            }}
                        >
                            { segment.label }
                        </li>
                    )
                    :(
                        <li 
                            className='text-neutral-200'
                            key={segment.href}
                            style={{ 
                                color: (variants[color] ?? color) 
                            }}
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