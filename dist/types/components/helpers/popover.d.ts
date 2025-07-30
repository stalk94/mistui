import type { PopoverProps } from './types';
export declare function useDropdownPosition(triggerRef: React.RefObject<HTMLElement>, dropdownRef: React.RefObject<HTMLElement>, position: string, isOpen: boolean): {
    top: number;
    left: number;
};
export default function Dropdown({ trigger, children, position, className, classNameContainer, style, isHover, onClose, shadow, usePortal, open: controlledOpen, setOpen: setControlledOpen }: PopoverProps): import("react/jsx-runtime").JSX.Element;
