import { useMemo, createContext, useEffect, useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './theme';


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
    variant?: 'contained' | 'dash' | 'outline'
    isSoft?: boolean
}


const icons = {
    error: ()=> (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 shrink-0 stroke-red-400" 
            fill='none'
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    success: ()=> (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 shrink-0 stroke-green-500" 
            fill="none" 
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    warning: ()=> (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 shrink-0 stroke-orange-400" 
            fill="none" 
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    info: ()=> (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            className="h-6 w-6 shrink-0 stroke-blue-400"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    )
}
const AlertContext = createContext<AlertContextType | undefined>(undefined);
export const useAlert =()=> {
    const context = useContext(AlertContext);
    if(!context) throw new Error('useAlert must be used within an AlertProvider');
    
    return context;
}


/**
 *  провайдер для подключения всплывающих ошибок
 */
export function AlertProvider({ 
    children, 
    delDelay = 6000, 
    position, 
    variant = 'contained', 
    isSoft 
}: AlertManagerProps) {
    const { variants, plugins } = useTheme();
    const [stack, setStack] = useState<AlertItem[]>([]);


    const getColors = useMemo(()=> {
        if (variant === 'contained') return({
            error: plugins.alpha(variants.error, 0.4),
            warning: plugins.alpha(variants.warning, 0.4),
            success: plugins.alpha(variants.success, 0.4),
            info: plugins.alpha(variants.info, 0.4),
        });
        else return({
            error: plugins.alpha(variants.error, 0.1),
            warning: plugins.alpha(variants.warning, 0.1),
            success: plugins.alpha(variants.success, 0.1),
            info: plugins.alpha(variants.info, 0.1),
        });
    }, [variant]);
    const getColorsBorder = useMemo(()=> {
        if (variant === 'contained') return({
            error: plugins.alpha(variants.error, 0.8),
            warning: plugins.alpha(variants.warning, 0.8),
            success: plugins.alpha(variants.success, 0.8),
            info: plugins.alpha(variants.info, 0.8),
        });
        else return({
            error: plugins.alpha(variants.error, 0.6),
            warning: plugins.alpha(variants.warning, 0.6),
            success: plugins.alpha(variants.success, 0.6),
            info: plugins.alpha(variants.info, 0.6),
        });
    }, [variant]);
    const getPosition = useMemo(()=> {
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
        }, (delDelay));
    }
    useEffect(()=> {
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
                                        ${isSoft && 'alert-soft'}
                                    `}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: getColors[type],
                                        borderColor: getColorsBorder[type],
                                        margin: 2
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