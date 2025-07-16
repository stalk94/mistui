import dynamic from 'next/dynamic';


export default function wrapClientOnly(
    path: string, 
    Placeholder: React.FC, 
    props: any = {}
) {
    return dynamic(() => import(path), {
        ssr: false,
        loading: () => <Placeholder {...props} />
    });
}