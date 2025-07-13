type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;


export type CardProps = Props & {
    /** картинка сбоку */
    imageIsSide?: boolean
    /** изображение станет фоном карточки */
    imageIsFull?: boolean
    imageSrc?: string
}