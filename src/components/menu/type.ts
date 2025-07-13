
export type ItemDropMenu = {
    id: string | number
    label: string | React.ReactElement
}


export type DropMenuProps = {
    style?: React.CSSProperties & { positionAnchor?: string }
    id?: string
    onSelect?: (select: string | number| ItemDropMenu)=> void
    items?: string[] | ItemDropMenu[]
    onlyId?: boolean
}

export type PopUpMenuProps = {
    style?: React.CSSProperties & { positionAnchor?: string }
    id?: string
    isHover?: boolean
    children: React.ReactElement | string
    content: React.ReactElement
}

export type AccordionItem = {
    /** label аккордеона */
    title: React.ReactElement
    /** тело аккордеона */
    content: React.ReactElement
}
