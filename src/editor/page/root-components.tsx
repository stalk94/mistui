import { useEffect } from "react";
import { Outlet, useNavigate, useHref } from 'react-router-dom';



export default function ComponentsRoot() {
    const navigate = useNavigate();

    useEffect(()=> {
        navigate('/components/ThemeProvider')
    }, []);


    return (
        <main className="flex flex-col h-full w-full" style={{fontFamily: '"Inter", sans-serif'}}>
            
        </main>
    );
}