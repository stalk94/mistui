import React from "react";


type ErrorBoundaryProps = {
    children: React.ReactNode
    sendToserver: (data: {
        name: string
        message: string
        stack: any
        time: string
        type: 'react'
    })=> void
}


// еще сыроват
class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode, sendToserver }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: any) {
        //console.error("Ошибка в react:", error, errorInfo.componentStack);
        const data = {
            name: error.name,
            message: error.message,
            stack: errorInfo.componentStack
        }
        
        this.props.sendToserver?.({
            time: new Date().toUTCString(),
            type: 'react',
            ...data,
        });
    }

    render() {
        if(this.state.hasError) {
            return(
                <div style={{margin:'auto', display:'flex', flexDirection:'column'}}>
                    <h1 style={{color: 'red'}}>
                        Упс. Что-то пошло не так...
                    </h1>
                    <h3 style={{color: 'orange'}}>
                        ↻ Перезагрузите страницу
                    </h3>
                </div>
            );
        }
        return this.props.children;
    }
}


export default ErrorBoundary;