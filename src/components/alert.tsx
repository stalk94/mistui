import React from 'react';
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
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    variant?: 'dash' | 'outline'
    isSoft?: boolean
}

const icons = {
    error: ()=> (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    success: ()=> (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    warning: ()=> (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    info: ()=> (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    )
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
export function AlertProvider({ children, delDelay, position, variant, isSoft }: AlertManagerProps) {
    const [stack, setStack] = React.useState<AlertItem[]>([]);
    const curVariant = variant ? `alert-${variant}` : '';
    const bgColors = {
        error: "rgba(211, 47, 47, 0.03)",
        warning: "rgba(245, 124, 0, 0.02)",
        success: "rgba(56, 142, 60, 0.03)",
        info: "rgba(2, 136, 209, 0.02)",
    }


    const getPosition = React.useMemo(()=> {
        if(position === 'bottom-left') return {
            bottom: 0,
            left: 0
        }
        else if(position === 'bottom-right') return {
            bottom: 0,
            right: 0
        }
        else if(position === 'top-left') return {
            top: 0,
            left: 0
        }
        else return {
            top: 0,
            right: 0
        }
    }, [position]);
    const addAlert =(type:'error'|'info'|'success'|'warning', message:string|React.ReactNode)=> {
        const id = Date.now();
        setStack((prevStack) => [...prevStack, { id, type, message }]);
        

        setTimeout(()=> {
            setStack((prevStack)=> prevStack.filter(alert => alert.id !== id));
        }, (delDelay ?? 6000));
    }
    React.useEffect(()=> {
        if (stack.length > 4) {
            setStack((old)=> {
                old.splice(0, 1);
                return [...old];
            });
        }
    }, [stack]);
    

    return (
        <AlertContext.Provider value={{ addAlert }}>
            <div 
                style={{
                    position: 'fixed',
                    zIndex: 99999,
                    maxWidth: '25%',
                    margin: '1%',
                    ...getPosition
                }}
            >
                <div className="join join-vertical">
                    <AnimatePresence>
                        { stack.map(({ id, type, message })=> (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div 
                                    role="alert" 
                                    className={`
                                        alert 
                                        alert-${type}
                                        ${curVariant}
                                        ${isSoft && 'alert-soft'}
                                    `}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: bgColors[type]
                                    }}
                                >
                                    { icons[type]() }
                                    { message }
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                 </div>
            </div>
            
            { children }
        </AlertContext.Provider>
    );
}