import React from 'react';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';



type AlertItem = {
    id: number;
    type: 'error' | 'info' | 'success' | 'warning';
    message: string | React.ReactNode;
}
type AlertContextType = {
    addAlert: (type: 'error' | 'info' | 'success' | 'warning', message: string | React.ReactNode)=> void;
}
export type AlertManagerProps = {
    children: React.ReactNode
    /** задержка перед удалением алерта в ms по умолчанию `6000 ms` */
    delDelay?: number
    /** по умолчанию `top-right` */
    variant?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}


const AlertContext = React.createContext<AlertContextType | undefined>(undefined);
export const useAlert =()=> {
    const context = React.useContext(AlertContext);
    if(!context) throw new Error('useAlert must be used within an AlertProvider');
    
    return context;
}


/**
 *  провайдер для подключения всплывающих ошибок
 */
export function AlertProvider({ children, delDelay, variant }: AlertManagerProps) {
    const [stack, setStack] = React.useState<AlertItem[]>([]);
    const isMounted = React.useRef(false);
    const bgColors = {
        error: "rgba(211, 47, 47, 0.03)",
        warning: "rgba(245, 124, 0, 0.02)",
        success: "rgba(56, 142, 60, 0.03)",
        info: "rgba(2, 136, 209, 0.02)",
    }


    const usePosition =()=> {
        if(variant === 'bottom-left') return {
            bottom: 0,
            left: 0
        }
        else if(variant === 'bottom-right') return {
            bottom: 0,
            right: 0
        }
        else if(variant === 'top-left') return {
            top: 0,
            left: 0
        }
        else return {
            top: 0,
            right: 0
        }
    }
    const getStyle =(type:'error'|'info'|'success'|'warning')=> ({
        display: "flex",
        alignItems: "center",
        backgroundColor: bgColors[type],
        "& .MuiAlert-icon": type === "error" ? {
            alignSelf: "center",
            animation: "blink 1s infinite"
        } : {
            alignSelf: "center"
        }
    });
    const addAlert =(type:'error'|'info'|'success'|'warning', message:string|React.ReactNode)=> {
        const id = Date.now();
        setStack((prevStack) => [...prevStack, { id, type, message }]);
        

        setTimeout(()=> {
            setStack((prevStack)=> prevStack.filter(alert => alert.id !== id));
        }, (delDelay ?? 6000));
    }
    React.useEffect(()=> {
        if(isMounted.current && stack.length > 4) {
            setStack((old)=> {
                old.splice(0, 1);
                return [...old];
            });
        }
        else if(!isMounted.current) {
            isMounted.current = true;
        }
    }, [stack]);
    

    return (
        <AlertContext.Provider value={{ addAlert }}>
            <div style={{
                    position: 'fixed',
                    zIndex: 999,
                    maxWidth: '25%',
                    margin: '1%',
                    ...usePosition()
                }}
            >
                <Stack spacing={1}>
                    <AnimatePresence>
                        { stack.map(({ id, type, message })=> (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Alert variant="outlined" severity={type} sx={getStyle(type)}>
                                    { message }
                                </Alert>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                 </Stack>
            </div>
            { children }
        </AlertContext.Provider>
    );
}