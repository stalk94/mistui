import { useTheme } from '../theme';
import type { CardProps } from './types';


// ! возможно стоит добавить color пропс
export default function Card({ 
    style = {}, 
    shadow,
    imageIsSide, 
    imageIsFull,
    imageSrc,
    className,
    classNameBody,
    title,
    description,
    actions,
    children,
    ...props 
}: CardProps) {
    const { shadows } = useTheme();
   

    return(
        <div 
            className={`
                card
                bg-base-300
                ${imageIsSide && 'card-side'}
                ${imageIsFull && 'card-image-full-no-overlay'}
                ${className ?? ''}
            `}
            style={{
                boxShadow: (shadow && shadows[shadow]) && shadows[shadow],
                ...style
            }}
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
            <div className={`card-body ${classNameBody && classNameBody}`}>
                { title &&
                    <div className="card-title">
                        { title }
                    </div>
                }
                { description &&
                    <p>
                        { description }
                    </p>
                }
                { actions &&
                    <div className="card-actions">
                        { actions }
                    </div>
                }

                { children }
            </div>
        </div>
    );
}