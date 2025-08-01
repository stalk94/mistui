export type Validator = (value: string | number | boolean) => {
    valid: boolean;
    helper: React.ReactNode;
};
export declare const validateLogin: (value: string) => {
    valid: boolean;
    helper: any;
};
export declare const validatePass: (value: string) => {
    valid: boolean;
    helper: any;
};
export declare const validatePhone: (phone: string) => {
    valid: boolean;
    helper: any;
};
export declare const validateEmail: (email: string) => {
    valid: boolean;
    helper: any;
};
export declare const validateConfirm: (isChecked: boolean) => {
    valid: boolean;
    helper: any;
};
