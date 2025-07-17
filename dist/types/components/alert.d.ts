type AlertContextType = {
    addAlert: (type: 'error' | 'info' | 'success' | 'warning', message: string | React.ReactNode) => void;
};
export type AlertManagerProps = {
    children: React.ReactNode;
    /** задержка перед удалением алерта в ms по умолчанию `6000 ms` */
    delDelay?: number;
    /** по умолчанию `top-right` */
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    variant?: 'contained' | 'dash' | 'outline';
    isSoft?: boolean;
};
export declare const useAlert: () => AlertContextType;
/**
 *  провайдер для подключения всплывающих ошибок
 */
export declare function AlertProvider({ children, delDelay, position, variant, isSoft }: AlertManagerProps): import("react/jsx-runtime").JSX.Element;
export {};
