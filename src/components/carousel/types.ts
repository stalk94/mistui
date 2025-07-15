import type { ButtonProps } from '../buttons/type';

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

export type PromoSliderProps = {
    editor?: React.ReactElement
    onChange?: (active: number)=> void
    items: {
        title: string
        description: string
        images: string[]
    }[]
    button?: ButtonProps
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    style?: React.HTMLAttributes<HTMLDivElement>['style']
}