import { useCallback, cloneElement, isValidElement, ReactElement, useMemo } from 'react';
import type { MainListProps, NavItem } from './type';
import { useTheme } from '../theme';
import { Typography } from '../text';


const tableSize = {
    auto: 'h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5',
    xs: 'h-4',
    sm: 'h-4',
    md: 'h-5',
    lg: 'h-5',
    xl: 'h-5'
}


/**
 * Menu is used to display a list of links vertically.             
 * Supports nested сollapsible submenu
 * @example <MainList
                size='xs'
                items={[
                    { id: '1', label: 'test', icon: <Cog8ToothIcon className='h-4' />},
                    { id: '2', label: 'test', icon: <HomeIcon className='h-4' /> },
                    {
                        id: '3', label: 'test', icon: <TrashIcon className='h-4' />, title: 'nested main',
                        open: true, style: {fontSize: 12},
                        children: [
                            { id: '3', label: 'test', icon: <TrashIcon className='h-4' /> },
                            {
                                id: '4', label: 'test', icon: <TrashIcon className='h-4' />,
                                children: [
                                    { id: '3', label: 'test', icon: <TrashIcon className='h-4' /> },
                                    { id: '4', label: 'test', icon: <TrashIcon className='h-4' /> }
                                ]
                            }
                        ]
                    }
                ]}
            />
 */
export default function MenuList({
    style = {},
    select,
    className,
    size = 'auto',
    isNested,
    onSelect,
    items,
    color
}: MainListProps) {
    const { autosizes, variants } = useTheme(); 
    const textSize = (size && size !== 'auto') ? `text-${size}` :  autosizes.text;
    const sizeIcon = tableSize[size];

    
    const handle = useCallback((item: NavItem) => {
        onSelect?.(item);
        item?.comand?.(item);
    }, [onSelect, items]);
    const render = useCallback((child: React.ReactNode) => (
        isNested 
            ? <>{ child }</>
            : <ul
                className={`
                    list
                    menu 
                    w-full
                    menu-${size}
                    p-[2px]
                    overflow-y-auto
                    ${textSize}
                    ${className ?? ''}
                `}
                style={style}
            >
                { child }
            </ul>
    ), [items, isNested, style]);


    return (
        render(
            items.map((item, index) => (
                <li 
                    className={`
                        p-[1px]
                        ${(select === item || select === item.id) ? 'selected' : ''}
                    `}
                    key={index}
                    style={{
                        color: (variants[color] ?? color)
                    }}
                >
                    {/* nested */}
                    { item?.children && (
                        <details open={item?.open}>
                            {/* nested title */}
                            { item?.title &&
                                <Typography 
                                    variant='caption' 
                                    color=''
                                    className="menu-title whitespace-nowrap"
                                    style={item?.style}
                                >
                                    { item?.title }
                                </Typography>
                            }

                            {/* parent */}
                            <summary className='p-0 items-center'>
                               {item.icon && isValidElement(item.icon) &&
                                    cloneElement(item.icon as ReactElement<any>, {
                                        className: sizeIcon
                                    })
                                }
                                <span className={`ml-1 items-center whitespace-nowrap ${textSize}`}>
                                    { item.label }
                                </span>
                            </summary>

                            {/* submenu */}
                            <ul className='pt-1'>
                                <MenuList 
                                    className={className}
                                    style={style}
                                    size={size}
                                    items={item.children} 
                                    isNested={true}
                                    onSelect={onSelect}
                                    select={select}
                                />
                            </ul>
                        </details>
                    )}

                    {/* not nested */}
                    { !item?.children && (
                        <>
                            <div 
                                className='flex p-0 items-center' 
                                onClick={(e)=> handle(item)}
                                style={item?.style}
                            >
                                <div className='flex items-center justify-center'>
                                    { item?.icon && isValidElement(item.icon) && 
                                        cloneElement(item.icon as ReactElement<any>, {
                                            className: sizeIcon
                                        }) 
                                    }
                                    <span className='ml-3 text-center whitespace-nowrap'>
                                        { item?.label }
                                    </span>
                                </div>
                                <div className='ml-auto'>
                                    { item?.action }
                                </div>
                            </div>
                            {/* divider border bottom */}
                            <div 
                                className="p-0 my-[1px]"
                                style={{
                                    background: 'none',
                                    borderBottomStyle: 'dotted',
                                    borderBottomWidth: item?.divider ? 1 : 0,
                                    borderColor: '#3a3a3a'
                                }}
                            />
                        </>
                    )}
                </li>
            ))
        )
    );
}