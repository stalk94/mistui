import React from "react";
type ErrorBoundaryProps = {
    children: React.ReactNode;
    sendToserver: (data: {
        name: string;
        message: string;
        stack: any;
        time: string;
        type: 'react';
    }) => void;
};
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, {
    hasError: boolean;
}> {
    constructor(props: {
        children: React.ReactNode;
        sendToserver: any;
    });
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: any): void;
    render(): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode>>;
}
export default ErrorBoundary;
