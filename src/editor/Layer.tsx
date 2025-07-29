import { useCallback, useEffect, useState } from 'react';
import { createStore } from 'statekit-lite';
import Rnd from './helpers/rnd';


const boirlplate: React.CSSProperties = {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    background: 'transparent',
}
const layersStore = createStore({

}, {
    persist: { key: 'layers'}
} as Record<string, any>);



export default function Layer({
    name,
    children
}) {
    const layers = layersStore.use();
    const [position, setPosition] = useState({x:0, y: 0});
    const [size, setSize] = useState({width:80, height: 80});
    const [style, setState] = useState(boirlplate);

    
    const change = (key: string, value: any) => {
        if(key!=='width' && key!=='height' && key!=='x' && key!=='y') setState((old) => {
            const updated = { ...old, [key]: value };
            return updated;
        });
        layersStore[name]?.set((prev) => ({
            ...prev,
            [key]: value,
        }));
    }
    const changeState = useCallback((data)=> {
        Object.entries(data).map(([key, value])=> change(key, value));
    }, [layers]);
    useEffect(()=> {
        if (name) {
            const store = layersStore.get(true);
            const entry = store[name];

            if (entry) {
                const { width, height, x, y, ...rest } = entry;

                // сравни старые значения
                if (width !== size.width || height !== size.height) {
                    setSize({ width, height });
                }
                if (x !== position.x || y !== position.y) {
                    setPosition({ x: x ?? 0, y: y ?? 0 });
                }

                setState((old) => {
                    const updated = { ...old, ...rest };
                    const changed = Object.keys(rest).some(key => old[key] !== rest[key]);
                    return changed ? updated : old;
                });
            }
            else layersStore[name].set({
                ...boirlplate,
                width: 100, 
                height: 100,
                x: 0,
                y: 0
            });
        }
    }, [name]);


    return (
        <Rnd
            initSize={size}
            initPosition={position}
            style={style}
            onChange={changeState}
        >
            {children}
        </Rnd>
    );
}