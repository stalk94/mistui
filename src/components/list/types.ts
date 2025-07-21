type ListItem = React.ReactNode

export type ListProps = {
    style?: React.CSSProperties 
    listStyle?: React.CSSProperties
    className?: HTMLUListElement['className']
    classNameList?: HTMLLIElement['className']
    /**
     * каждый 'ListItem' можно пердставить как список элементов в три колонки,      
     * третий элемент будет прижат в право      
     * @example <>       
     *      <div>left</div>     
     *      <div>center</div>       
     *      <div>right</div>        
     * </>
     */
    children: ListItem[]
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
}