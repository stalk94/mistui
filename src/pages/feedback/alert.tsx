import { Button, useAlert } from '@/index';
import { Section, Grid } from '../helpers';
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
            
            {/* default */}
            <Section title="Card" description="кнопка" code={`<Card></Card>`}>
                <Grid className="w-120 m-auto">
                    <AlertRender />
                </Grid>
            </Section>
        </div>
    );
}


InfoAlert.meta = {
    
}