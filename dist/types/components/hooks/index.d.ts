import { SetStateAction, Dispatch } from 'react';
export { default as useBreakpoints } from './useBreackpoints';
export declare function useClientValidity<T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(ref: React.RefObject<T>): boolean;
export declare function useCache<T>(value: T): [T, Dispatch<SetStateAction<T>>];
export declare function useConditionalRef<T extends HTMLElement>(uid?: string): import("react").RefObject<T>;
export declare function useClickOutside(selectorsIgnore: string[], onClickOutside: () => void): void;
export declare function useHover<T extends HTMLElement>(): readonly [(node: T | null) => void, boolean, Dispatch<SetStateAction<boolean>>];
export declare function createGradientStyle(baseColor: string, direction?: 'to right' | 'to left' | 'to top' | 'to bottom' | string): React.CSSProperties;
