

export type SourceIremType = {
    type: 'image' | 'video' | 'content'
    src?: string | React.ReactElement
    style?: React.CSSProperties 
}

export type CarouselProps = {
    editor?: boolean
    width?: number 
    height?: number
    loop?: boolean
    autoplay?: boolean
    slidesToScroll?: number
    autoplayDelay?: number
    slidesToShow?: number
    items: SourceIremType[]
}