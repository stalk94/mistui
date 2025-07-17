import { useEffect, useState } from 'react';

const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    'xxl': 1536
};

type Breakpoint = keyof typeof breakpoints;


function getCurrentBreakpoint(width: number): Breakpoint {
    if (width >= breakpoints['xxl']) return 'xxl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
}

export default function useBreakpoints() {
    const [bp, setBp] = useState<Breakpoint>(() => getCurrentBreakpoint(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setBp(getCurrentBreakpoint(window.innerWidth));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return bp;
}