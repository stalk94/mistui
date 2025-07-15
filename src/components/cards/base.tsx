import { useTheme } from '../theme';
import type { CardProps } from './types';



export default function Card({ 
    style = {}, 
    imageIsSide, 
    imageIsFull,
    imageSrc,
    className,
    ...props 
}: CardProps) {
    const {} = useTheme();
    
    return(
        <div 
            className={`
                card 
                bg-base-300
                shadow-md
                ${imageIsSide && 'card-side'}
                ${imageIsFull && 'image-full'}
                ${className && className}
            `}
            style={style}
            { ...props }
        >
            {/* картинка */}
            {imageSrc &&
                <figure>
                    <img
                        src={imageSrc}
                        alt='image-cart' 
                    />
                </figure>
            }
            
            {/* основное тело */}
            <div className="card-body">
                <div className="card-title">
                    title
                </div>
                <p>
                    description
                </p>
                <div className="card-actions">
                    actions
                </div>
            </div>
        </div>
    );
}