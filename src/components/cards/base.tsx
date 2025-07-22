import { useTheme } from '../theme';
import type { CardProps } from './types';
import { cs } from '../hooks/cs';


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
            className={cs(`
                card
                bg-base-300
                ${imageIsSide && 'card-side'}
                ${imageIsFull && 'card-image-full-no-overlay'}
                ${className ?? ''}
            `)}
            style={{
                boxShadow: shadows[shadow],
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
            <div className={`card-body ${classNameBody ?? ''}`}>
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