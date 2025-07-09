import React from 'react';
import { Button, Box, ButtonGroup, Typography, IconButton, SxProps } from '@mui/material';
import { MediaImage } from '../carts/atomize';
import Card from '../carts/base';
import { FiberManualRecord, AdjustOutlined } from '@mui/icons-material';
import { Faker, ru, en } from '@faker-js/faker';
import { MarqueeText, MarqueeAdaptive } from '../text/@deprecate/marque';
import { useContainerSize } from '../hooks/useContainerWidth';
const faker = new Faker({ locale: [ru, en] });


function normalizeContent(content: any) {
  if (React.isValidElement(content)) return content;
  if (typeof content === 'string') return <span dangerouslySetInnerHTML={{ __html: content }} />;
  return null;
}
function generateTestData(count = 5) {
    return Array.from({ length: count }, () => ({
        title: faker.commerce.productName().toUpperCase(),
        buttonText: "ПОДРОБНЕЕ",
        description: faker.commerce.productDescription(),
        images: Array.from({ length: faker.number.int({ min: 4, max: 8 }) }, () =>
            `https://placehold.co/600x400/353636/gray?text=Promo image&font=roboto` 
        ),
    }));
}

export type PromoSliderProps = {
    editor?: React.ReactElement
    onChange?: (active: number)=> void
    items: {
        title: string
        description: string
        images: string[]
    }[]
    button?: {
        color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
        variant?: "text" | "outlined" | "contained"
        children?: React.ReactNode | string
        onClick?: ()=> void
    }
    style?: SxProps
    styles?: {
        dot?: {
            activeColor?: string 
            color?: string 
        }
        title?: {

        }
        description?: {

        }
    }
}


const IconGroop = ({ active, setActive, count, style }) => {
    const size = style?.size ?? '12px';
    const activeColor = style?.activeColor ?? '#c11619';
    const color = style?.color ?? '#666';

    const icons = React.useMemo(() => {
        const cappedCount = Math.min(count, 4);
        return Array.from({ length: cappedCount }, (_, i) => (
            <IconButton key={i} onClick={() => setActive(i)}>
                {i === active ? (
                    <AdjustOutlined sx={{ fontSize: size, color: activeColor }} />
                ) : (
                    <FiberManualRecord sx={{ fontSize: size, color }} />
                )}
            </IconButton>
        ));
    }, [active, count, setActive, size, activeColor, color]);

    
    return <ButtonGroup>{icons}</ButtonGroup>;
}
const PhotoColage = ({ images }) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: {
                    xs: '20%',
                    sm: "100%",
                },
                display: "flex",
                flexDirection: {
                    xs: "row",
                    sm: "row",
                    md: "column"
                }, // В ряд на мобильных, в колонку на больших
                justifyContent: {
                    xs: "center",
                    md: "flex-start"
                },
                alignItems: "center",
                gap: {
                    xs: 0.5,
                    md: 1
                },
                mt: {
                    xs: 0,
                    md: 6
                },
                maxHeight: {
                    xs: '100px',
                    sm: '160px',
                    md: 'calc(100vh - 200px)' // не больше, чем экран
                },
                maxWidth: "100%", // Ограничение по ширине для контейнера
                overflow: "hidden", // Не вылазить за пределы
                flexWrap: "wrap",
            }}
        >
            {images.map((src, index) => index !== 0 && (
                <Box
                    key={index}
                    component="img"
                    src={src}
                    alt={`photo-${index}`}
                    sx={{
                        width: "25%", // Зависит от контейнера
                        aspectRatio: "1 / 1",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
                        alignSelf: { md: index % 2 === 0 ? "flex-start" : "flex-end" },
                        transition: "transform 0.3s",
                        "&:hover": { transform: "scale(1.1)" },
                        border: '2px solid gray',
                        maxHeight: {
                            xs: '40px',
                            sm: '60px',
                            md: "120px",
                        },
                        maxWidth: {
                            xs: '40px',
                            sm: '60px',
                            md: "120px",
                        }
                    }}
                />
            ))}
        </Box>
    );
}
const Description = ({ data, navigationSlot, button, style }) => {
    const [ref, width, height] = useContainerSize<HTMLDivElement>();
    

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: width < 600 ? 'start' : "center",
                    alignItems: "start",
                    textAlign: "center",
                    padding: 8,
                    flexGrow: 1,
                }}
            >
                <MarqueeAdaptive
                    speed={60}
                    color="text.primary"
                    sx={{
                        textAlign: "left",
                        fontSize: width < 600 ? "1.2rem" : {
                            xs: "1.2rem",
                            sm: "1.6rem",
                            md: "2.5rem",
                        },
                        fontWeight: 600,
                        wordBreak: "break-word",
                        lineHeight: 1.2,
                        maxWidth: "100%",
                        ...style?.title
                    }}
                    variant='h4'
                >
                    { normalizeContent(data.title) }
                </MarqueeAdaptive>
                <Typography component="div"
                    color="text.secondary"
                    sx={{
                        textAlign: "left",
                        mt: 2,
                        fontSize: width < 600 ? "0.8rem" : {
                            xs: "0.8rem",
                            sm: "1.4rem",
                            md: "2rem",
                            ...style?.description
                        }
                    }}
                >
                    {normalizeContent(data.description)}
                </Typography>
                {button}

                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                >
                    { navigationSlot }
                </div>
            </div>

            {/* <PhotoColage images={data.images} /> */}
        </div>
    );
}


export default function PromoSlider({ items, button, styles, style, editor, ...props }: PromoSliderProps) {
    const [active, setActive] = React.useState(0);
    const testData = React.useMemo(()=> generateTestData(), []);


    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        
        if (props.onChange) props.onChange(active);
    }, [active]);
   

    return (
        <>
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
                actionAreaEnabled
                sx={{ minHeight: 205, ...style }}
                { ...props }
            >
                <React.Fragment>
                    
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 1,
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            minHeight: 220,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            p: 2,
                        }}
                    >
                        <Description
                            style={{
                                title: styles?.title,
                                description: styles?.description
                            }}
                            button={
                                <Button 
                                    variant='outlined'
                                    color='primary'
                                    sx={{ mt: 4 }}
                                    { ...button }
                                    children={button?.children ?? 'go to'}
                                />
                            }
                            data={(items ?? testData)[active]}
                            navigationSlot={
                                <IconGroop
                                    style={styles?.dot}
                                    active={active}
                                    setActive={setActive}
                                    count={(items ?? testData).length}
                                />
                            }
                        />
                    </Box>
                    
                    <MediaImage
                        sx={{ minHeight: 205, ...style }}
                        src={(items ?? testData)[active].images[0]}
                    />
                </React.Fragment>
            </Card>
        </>
    );
}