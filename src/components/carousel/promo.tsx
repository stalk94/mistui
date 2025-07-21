import { useMemo, useEffect, useState, Fragment } from 'react';
import Card from '../cards/base';
import { Button, IconButton } from '../buttons';
import Typography from '../text/Typography';
import type { PromoSliderProps } from './types';
import { Faker, ru, en } from '@faker-js/faker';
const faker = new Faker({ locale: [en] });


const AdjustIcon = ({ className, fill, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill ?? "currentColor"}
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${className && className}`}
        { ...props }
    >
        <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 
      0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-12c-2.76 
      0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
    </svg>
);
const FiberManualRecordIcon = ({ className, fill, ...props }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill={fill ?? "currentColor"}
        viewBox="0 0 24 24" 
        className={`w-6 h-6 ${className && className}`}
        { ...props }
    >
        <circle cx="12" cy="12" r="8" />
    </svg>
);

function generateTestData(count = 5) {
    return Array.from({ length: count }, () => ({
        title: faker.commerce.productName().toUpperCase(),
        buttonText: "detail",
        description: faker.commerce.productDescription() +  faker.commerce.productDescription(),
        images: Array.from({ length: faker.number.int({ min: 4, max: 8 }) }, () =>
            `https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto` 
        ),
    }));
}
const IconGroup = ({ active, setActive, count, style }) => {
    const size = style?.size ?? '12px';
    const activeColor = '#c11619';
    const color = style?.color ?? '#666';

    const icons = useMemo(() => {
        const cappedCount = Math.min(count, 4);

        return Array.from({ length: cappedCount }, (_, i) => (
            <IconButton 
                key={i} 
                size='xs'
                variant='ghost'
                onClick={() => setActive(i)}
            >
                {(i === active) 
                    ? <AdjustIcon fill={activeColor} />
                    : <FiberManualRecordIcon fill={color} />
                }
            </IconButton>
        ));
    }, [active, count, setActive, size, activeColor, color]);

    
    return (
        <div className='flex justify-center'>
            { icons }
        </div>
    );
}


export default function PromoSlider({ 
    items, 
    button, 
    editor, 
    ...props 
}: PromoSliderProps) {
    const [active, setActive] = useState(0);
    const testData = useMemo(()=> generateTestData(), []);


    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        if (props.onChange) props.onChange(active);
    }, [active]);
   

    return (
        <Fragment>
            { editor &&
                <div
                    style={{
                        position: 'absolute',
                        width: '50%',
                        top: '36%',
                        left: '55%',
                    }}
                >
                    { editor }
                </div>
            }

            <Card
                imageIsFull
                classNameBody='pb-1'
                className='h-full'
                imageSrc={(items ?? testData)[active]?.images[0]}
                title={(items ?? testData)[active]?.title}
                description={
                    <Typography
                        as='div'
                        variant='overline'
                        shadow='sm'
                    >
                        { (items ?? testData)[active]?.description }
                    </Typography>
                }
                actions={
                    <div className='flex flex-col w-full'>
                        <Button
                            size='md'
                            className='ml-auto'
                            color='secondary'
                            children={'go to'}
                            { ...button }
                        />
                        <IconGroup
                            active={active}
                            setActive={setActive}
                            count={3}
                            style={{}}
                        />
                    </div>
                }
                { ...props }
            >
            </Card>
        </Fragment>
    );
}