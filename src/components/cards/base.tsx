import { useTheme } from '../theme';
import type { CardProps } from './types';
import { cs } from '../hooks/cs';


// ! size
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
    color,
    size,
    ...props 
}: CardProps) {
    const { shadows, variants } = useTheme();


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
                backgroundColor: (variants[color] ?? color) ?? variants.neutral,
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
            <div 
                className={cs(`
                    card-body 
                    ${classNameBody ?? ''}
                `)}
            >
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