import { forwardRef, useMemo, useRef, useState } from 'react';
import { FormWrapper, ValidatorBottomLabel } from './atomize';
import { useClientValidity } from '../hooks';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import type { BaseProps } from './type';
import { cs } from '../hooks/cs';



const BaseInput = forwardRef<HTMLInputElement, BaseProps>(function BaseInput(
    {
        style,
        type,
        placeholder,
        size,
        color = 'neutral',
        variant = 'outline',
        labelLeft,
        labelTop,
        labelRight,
        validator,
        onChange,
        value,
        required,
        className,
        shadow,
        ...props
    },
    ref
) {
    const uid = useUids(type);
    const { styles, variants, plugins } = useTheme();
    const [val, setVal] = useState(value);
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;
    const isInvalid = useClientValidity(inputRef);

    
    const colorPlaceholder = useMemo(() => {
        const curColor = (variants[color] ?? color) ?? style?.color;
        let cur = 'white';

        if (!variants[color]) {
            const isBright = plugins.isBright(curColor, 100);

            if (!isBright) cur = 'white';
            else cur = curColor;

            if (variant === 'contained' || variant === 'soft') cur = 'black';
        }

        return plugins.alpha(cur, 0.4);
    }, [color, style]);
    const focusWithinColor = useMemo(() => {
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor);

        return colorVarint;
    }, [color, style, variant]);

    
    const handle = (newValue: string) => {
        setVal(newValue);
        onChange?.(newValue);
    }
    

    return(
        <>
            <style>
                {cs(`
                    input[data-id="${uid}"]::placeholder {
                        color: ${colorPlaceholder};
                    }
                    .input-focus[data-id="${uid}"]:focus-within {
                        outline-color: ${focusWithinColor};
                    }
                `)}
            </style>
            
            <FormWrapper 
                data-id={uid}
                labelLeft={labelLeft}
                labelRight={labelRight}
                labelTop={labelTop}
                size={size}
                color={color}
                validator={validator}
                required={required}
                style={style}
                className={`filter saturate-150 ${className}`}
                variant={variant}
                shadow={shadow}
            >
                <input
                    data-id={uid}
                    ref={inputRef}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    style={{
                        display: 'block', 
                        width: '100%', 
                        color: (style?.color ?? styles?.input?.fontColor)
                    }}
                    value={val}
                    onChange={(e)=> handle(e.target.value)}
                    { ...props }
                />
                { validator && typeof validator === 'boolean' && isInvalid &&
                    <ValidatorBottomLabel>
                        !
                    </ValidatorBottomLabel>
                }
            </FormWrapper>
            { validator && typeof validator !== 'boolean' && isInvalid && 
                <ValidatorBottomLabel>
                    { validator }
                </ValidatorBottomLabel>
            }
        </>
    );
});

export default BaseInput;