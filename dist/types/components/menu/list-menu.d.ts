import type { MainListProps } from './type';
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
export default function MenuList({ style, select, className, size, isNested, onSelect, items, color }: MainListProps): import("react/jsx-runtime").JSX.Element;
