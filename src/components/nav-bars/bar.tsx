import { Paper, Box, useTheme, darken, PaperProps } from "@mui/material";
import React from "react";

type BarProps = PaperProps & {
    orientation?: 'horizontal' | 'vertical'
    style?: React.CSSProperties
    children?: React.ReactNode | string
    start?: React.ReactNode | string
    end?: React.ReactNode | string
}


export default function CustomBar({ orientation, children, start, end, style, ...props }: BarProps) {
    const isVertical = (orientation === 'vertical' || orientation === undefined) ? true : false;
    const positionEnd = isVertical ? {bottom: 0} : {right: 0};
    const positionStart =  isVertical ? {top: 0} : {left: 0};
    const theme = useTheme();
    
    const useTopOrEndColor = (type: 'start' | 'end') => {
        const color = theme.palette?.toolNavBar?.[type];

        if (!color) {
            const bcgColor = darken(theme.palette?.toolNavBar?.main, 0.1);
            return darken(bcgColor, 0.1);
        }
        return color;
    }


    return (
        <Paper
            { ...props }
            sx={{
                display: 'flex',
                flexDirection: isVertical ? 'column' : 'row',
                width: '100%',
                height: '100%',
                border: `1px solid ${darken(theme.palette.divider, 0.1)}`,
                overflowY: isVertical ? 'auto' : 'hidden',
                overflowX: isVertical ? 'hidden' : 'auto',
                textAlign: 'center',
                ...theme.mixins?.scrollbar,
                ...style
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    ...positionStart,
                    zIndex: 10,
                    textAlign: 'center',
                    background: useTopOrEndColor('start'),
                }}
            >
                { start }
            </Box>

            { children }

            {/* нижняя панель инструментов рабочей области */}
            <Box
                sx={{
                    position: "sticky",
                    ...positionEnd,
                    zIndex: 10,
                    marginTop: isVertical ? 'auto' : undefined,
                    marginLeft: !isVertical ? 'auto' : undefined,
                    textAlign: 'center',
                    background: useTopOrEndColor('end'),
                }}
            >
                { end }
            </Box>
        </Paper>
    );
}