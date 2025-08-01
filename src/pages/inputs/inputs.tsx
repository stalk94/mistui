import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, sizes, variants, colorsCustom } from '../helpers';
import { BaseInput } from '@/components/inputs';
import { inputsMeta } from '../meta';
import { Typography } from '@/components/text';
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from 'react';


const Render = () => {
    const [error, setError] = useState<string|undefined>();

    const validator = (value: string) => {
        let helper;
        let result = true;

        if (value.length > 5) {
            if (value.length > 32) helper = '❗ login more than 32 characters';
        }
        else helper = '❗ Login less than 6 characters';

        if (value.length > 1 && !/^[a-zA-Z0-9_-]+$/.test(value)) {
            helper = '❗ Contains prohibited characters.';
        }


        if (helper) {
            result = false;
            setError('❌');
        }
        else setError(undefined);


        return {
            valid: result,
            helper: helper
        }
    }

    return (
        <BaseInput
            size="sm"
            labelLeft={
                error ?? '👤'
            }
            placeholder="enter login"
            validator={validator}
        />
    );
}


export default function InfoInput(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            <Typography>
                <b>🚀 Features:</b> <br/>
                ㆍBaseInput serves as the foundational building block for all input components in the library, providing a consistent and flexible base.
                Use it as the foundation to build your own custom forms and inputs.<br/><br/>

                ㆍControlled & Uncontrolled support <br/>
                Works in both controlled (value, onChange) and uncontrolled (internal state) modes. Local state doesn’t interfere with external updates.<br/><br/>

                ㆍThemed & customizable<br/>
                Colors, shadows, sizes, placeholder behavior — all follow the theme system or can be overridden individually.<br/><br/>

                ㆍBuilt-in FormWrapper integration<br/>
                Automatically wraps in FormWrapper to support floating labels, validation, sizing, and layout (top, left, right labels).<br/><br/>

                ㆍSmart placeholder coloring<br/>
                Placeholder color is dynamically computed based on theme brightness and variant (outline, contained, soft).<br/><br/>

                ㆍFocus styles and outline<br/>
                Input outline color adapts to the theme and component variant using :focus-within behavior.<br/><br/>

                ㆍValidation support<br/>
                Supports validation if you pass a function, the input will be checked and a custom message will be output. See the examples for more details.<br/>
            </Typography>

            <Typography variant='caption' style={{color:'#9e9e9e'}}>
                📌 Because this input is one of the core base components, and all the core components of the library use this smart behavior, this makes the whole library more consistent, flexible, and attractive to use.
            </Typography>

            {/* base */}
            <Section
                title="Base"
                description="simple input"
                code={`
                    <BaseInput
                        size="sm"
                        placeholder="placeholder"
                    />
                `}
            >
                <div className="flex justify-center">
                    <BaseInput
                        size="sm"
                        placeholder="placeholder"
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description="in the example is used `color` default"
                code={variants
                    .map((v) => `<BaseInput variant="${v}" placeholder="${v}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant) => variant!=='link' && (
                        <BaseInput
                            key={variant}
                            size="sm"
                            placeholder={variant}
                            variant={variant}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="Theme Colors"
                description=""
                code={colors
                    .map((c) => `<BaseInput color="${c}" variant="outline" placeholder="${c}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color) => (
                        <BaseInput
                            key={color}
                            variant="outline"
                            color={color}
                            type="text"
                            size="sm"
                            placeholder={color}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom colors */}
            <Section
                title="Custom Colors"
                description="passed custom color and `dash` variant to props"
                code={colorsCustom
                    .map((v, i) => `<BaseInput size="sm" variant="dash" color="${v}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colorsCustom.map((color, i) => (
                        <BaseInput
                            key={color}
                            size="sm"
                            variant='dash'
                            color={color}
                            placeholder={color}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom colors or random variants */}
            <Section
                title="variants and color"
                description="passed themes color and variant to props"
                code={variants
                    .map((v, i) => `<BaseInput variant="${v}" color="${colorsCustom[i]}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => variant!=='link' && (
                        <BaseInput
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colorsCustom[i]}
                            placeholder={variant}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description=""
                code={sizes
                    .map((size) => `<BaseInput size="${size}" placeholder="${size}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <BaseInput
                            key={size}
                            size={size}
                            placeholder={size}
                            value={size === 'xs' ? 'easter egg' : ''}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* labels left */}
            <Section
                title="Label Left"
                description="label left"
                code={`<BaseInput labelLeft="🔍︎" />`}
            >
                <ButtonGrid>
                    <BaseInput
                        size="sm"
                        variant='dash'
                        color='secondary'
                        placeholder={'placeholder'}
                        labelLeft="🔍︎"
                    />
                </ButtonGrid>
            </Section>

            {/* labels right */}
            <Section
                title="Label Right"
                description="label right"
                code={`<BaseInput labelRight="✔️" variant='dash' color='secondary'/>`}
            >
                <ButtonGrid>
                    <BaseInput
                        size="sm"
                        variant='dash'
                        color='secondary'
                        placeholder={'placeholder'}
                        labelRight="✔️"
                    />
                </ButtonGrid>
            </Section>

            {/* labels top */}
            <Section
                title="Label Top"
                description="label top and mixery"
                code={`<BaseInput labelTop="label top" color='secondary' variant='outline'/>`}
            >
                <ButtonGrid>
                    <BaseInput
                        size="sm"
                        variant='outline'
                        color='secondary'
                        placeholder='placeholder'
                        labelTop={`label top`}
                    />
                    <BaseInput
                        size="sm"
                        placeholder={'placeholder'}
                        labelLeft="🔍︎"
                        labelRight="🔍︎"
                        color='secondary'
                        labelTop={`label mixery`}
                    />
                </ButtonGrid>
            </Section>

            {/* base */}
            <Section
                title="required"
                description=""
                code={`
                    <BaseInput
                        size="sm"
                        placeholder="placeholder"
                        required
                        labelTop='password'
                        labelLeft='🔑'
                    />
                `}
            >
                <div className="flex justify-center">
                    <BaseInput
                        type='text'
                        size="sm"
                        placeholder="placeholder"
                        required
                        labelTop='password'
                        labelLeft='🔑'
                    />
                </div>
            </Section>

            {/* validator */}
            <Section
                title="validator"
                description="Example with a custom validator function. It is important to remember that your function must follow the interface `Validator`"
                code={`
                    import { BaseInput } from 'mistui-kit';

                    // custom validator interface your function must follow the interface
                    type Validator = (value: string|number|boolean) =>  { valid: boolean, helper: React.ReactNode }


                    const LoginInput = () => {
                        const [error, setError] = useState<string|undefined>();

                        // hook validator
                        const validator: Validator = (value) => {
                            let helper;
                            let result = true;

                            if (value.length > 5) {
                                if (value.length > 32) helper = '❗ login more than 32 characters';
                            }
                            else helper = '❗ Login less than 6 characters';

                            if (value.length > 1 && !/^[a-zA-Z0-9_-]+$/.test(value)) {
                                helper = '❗ Contains prohibited characters.';
                            }


                            if (helper) {
                                result = false;
                                setError('❌');     // ! side
                            }
                            else setError(undefined);


                            return {
                                valid: result,
                                helper: helper
                            }
                        }

                        return (
                            <BaseInput
                                size="sm"
                                labelLeft={
                                    error ?? '👤'
                                }
                                placeholder="login"
                                validator={validator}
                            />
                        );
                    }
                `}
            >
                <div className="flex justify-center">
                    <div className=' max-w-50'>
                        <Render />
                    </div>
                </div>
            </Section>
        </div>
    );
}

InfoInput.meta = {
    ...inputsMeta
}