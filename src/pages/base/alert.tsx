import { Button, useAlert, Typography } from '@/index';
import { Section, Grid, CodeBlock } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


const AlertRender = (props) => {
    const { addAlert } = useAlert();

    const useTextAllert = (type: 'error' | 'warning' | 'success' | 'info') => {
        const words = [
            "Ошибка", "Успешно", "Действие", "Обновлено", "Предупреждение", "Критическая",
            "Операция", "Выполнена", "Проблема", "Запущено", "Анализ", "Внимание", "Процесс",
            "Ожидание", "Прервано", "Система", "Доступ", "Разрешено", "Ограничено", "Завершено",
            "Неудача", "Обнаружено", "Требуется", "Проверка", "Перезапуск", "Результат",
            "Конфигурация", "Сбой", "Инициализация", "Запрос", "Режим", "Соединение"
        ];

        const length = Math.floor(Math.random() * (14 - 6 + 1)) + 6;
        const randomText = Array.from({ length }, () =>
            words[Math.floor(Math.random() * words.length)]
        ).join(" ");


        addAlert(type, randomText);
    }

    return (
        <>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='success'
                onClick={() => useTextAllert('success')}
            >
                success
            </Button>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='info'
                onClick={() => useTextAllert('info')}
            >
                info
            </Button>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='error'
                onClick={() => useTextAllert('error')}
            >
                error
            </Button>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='warning'
                onClick={() => useTextAllert('warning')}
            >
                warning
            </Button>
        </>
    );
}


export default function InfoAlert(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Typography as='div' variant='caption'>
                Key Features:
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>Global context — wrap your app (inside `ThemeProvider`) to enable alerts </li>
                    <li>`useAlert()` hook — available in any child component </li>
                    <li>`addAlert(type, message)` — triggers an alert of a given type (success, error, info, warning) </li>
                    <li>Alerts are styled automatically based on theme and color variant </li>
                </ul>
            </Typography>
            <Typography as='div' variant='caption'>
                <p>
                    📌 Positioning <br/>
                    Alerts are displayed in a fixed default position on the screen (top-right by default).
                    This position can be configured globally via theme or provider settings.
                </p>
                <p className='mt-2'>
                    🚫 Auto-removal <br/>
                    Maximum 4 alerts can be visible on screen at once.
                    When the limit is exceeded, the oldest alerts are automatically dismissed to make room for new ones.
                    The rate of disappearance is regulated through `delDelay` props (default 6000 ms).
                </p>
            </Typography>

            <CodeBlock
                code={`
                    import { AlertProvider, useAlert } from 'mistui-kit';

                    const Component =()=> { 
                        const { addAlert } = useAlert();    // child components can use hook  

                        return (
                            <Button
                                shadow='sm'
                                variant='outline'
                                size='md'
                                style={{ margin: 3 }}
                                color='success'
                                onClick={() => addAlert('success', 'text alert message')}
                            >
                                success
                            </Button>
                        );
                    }
                    
                    // application entry point
                    const App = () => (
                        <ThemeProvider>
                            <AlertProvider>
                                <Component />
                                ...
                            </AlertProvider>
                        </ThemeProvider>
                    );
                `}
            />

            <Typography as='div' variant='caption'>
                ⚠️ Notes:
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>AlertProvider must wrap all components that use the `useAlert()` hook </li>
                    <li>The type argument affects icon, color, and behavior of the alert</li>
                </ul>
            </Typography>


            {/* default */}
            <Section 
                title="example of work" 
                description="success, error, info, warning" 
                code={`
                    const Component =()=> { 
                        const { addAlert } = useAlert();

                        return (
                            <Button
                                shadow='sm'
                                variant='outline'
                                size='md'
                                style={{ margin: 3 }}
                                color='success'
                                onClick={() => addAlert('success', 'text alert message')}
                            >
                                success
                            </Button>
                        );
                    }

                    const App =()=> {
                        return(
                            <AlertProvider variant='outline'>
                                <Component />
                                ...
                            </AlertProvider>
                        );
                    }
                `}
            >
                <Grid className="w-120 m-auto">
                    <AlertRender />
                </Grid>
            </Section>
        </div>
    );
}


InfoAlert.meta = {
    children: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'All content React JSX application'
    },
    position: {
        values: ["top-left", "top-right", "bottom-left", "bottom-right"],
        type: 'enum',
        default: 'top-right',
        description: 'position alert'
    },
    delDelay: {
        values: ['number'],
        type: 'number',
        default: 6000,
        description: 'The rate of disappearance is regulated through'
    },
    variant: {
        values: ["contained", "outline", "dash"],
        type: 'enum',
        default: 'contained',
        description: 'Controls the visual style like filled.'
    }
}