// валидатор логина
export const validateLogin = (value: string) => {
    let helper;
    let result = true;

    if (value.length > 5) {
        if (value.length > 32) helper = 'Логин более 32 символов';
    }
    else helper = 'Логин менее 6 символов';
    if (value.length > 1 && !/^[a-zA-Z0-9_-]+$/.test(value)) {
        helper = 'Присутствуют запрешенные символы.';
    }


    if (helper) {
        result = false;
    }

    return {
        result,
        helperText: helper
    }
}

// валидатор пароля
export const validatePass = (value: string) => {
    let helper;
    let result = true;

    if (value.length > 5) {
        if (value.length > 32) helper = 'Пароль более 32 символов';
    }
    else helper = 'Пароль менее 6 символов';

    if (helper) {
        result = false;
    }

    return {
        result,
        helperText: helper
    }
}

// Проверка валидности номера телефона
export const validatePhone = (phone: string) => {
    let helperText;
    const phoneRegex = /^\+?[1-9]\d{6,14}$/;
    const result = phoneRegex.test(phone);
    if (!result) helperText = 'Неверный формат номера';

    return {
        result,
        helperText
    }
}

// Проверка валидности email
export const validateEmail = (email: string) => {
    let helperText;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailRegex.test(email ?? '');
    if (!result) helperText = 'Неверный формат email';

    return {
        result,
        helperText
    }

}

// Проверка валидности принятия соглашения
export const validateConfirm = (isChecked: boolean) => {
    let helperText;
    if (!isChecked) helperText = 'Надо принять пользовательское соглашение';

    return {
        result: isChecked,
        helperText
    }
}