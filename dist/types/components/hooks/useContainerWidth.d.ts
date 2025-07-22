export declare function useContainerSize<T extends HTMLElement>(): readonly [import("react").RefObject<T>, number, number];
export declare function parseCssToGroups(css: string): Record<string, {
    comment?: string;
    styles: Record<string, string>;
}>;
