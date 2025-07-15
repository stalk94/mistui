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
    items: ListItem[]
}