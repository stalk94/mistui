export type Validator = (value: string|number|boolean) =>  { valid: boolean, helper: React.ReactNode }


// валидатор логина
export const validateLogin = (value: string) => {
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
    }

    return {
        valid: result,
        helper: helper
    }
}

// валидатор пароля
export const validatePass = (value: string) => {
    let helper;
    let result = true;

    if (value.length > 5) {
        if (value.length > 32) helper = 'Password is more than 32 characters';
    }
    else helper = 'Password less than 6 characters';

    if (helper) {
        result = false;
    }

    return {
        valid: result,
        helper: helper
    }
}

// Проверка валидности номера телефона
export const validatePhone = (phone: string) => {
    let helperText;
    const phoneRegex = /^\+?[1-9]\d{6,14}$/;
    const result = phoneRegex.test(phone);
    if (!result) helperText = 'Invalid number format';

    return {
        valid: result,
        helper: helperText
    }
}

// Проверка валидности email
export const validateEmail = (email: string) => {
    let helperText;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailRegex.test(email ?? '');
    if (!result) helperText = 'Invalid email format';

    return {
        valid: result,
        helper: helperText
    }

}

// Проверка валидности принятия соглашения
export const validateConfirm = (isChecked: boolean) => {
    let helperText;
    if (!isChecked) helperText = 'You must accept the user agreement';

    return {
        valid: isChecked,
        helper: helperText
    }
}