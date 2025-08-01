import Intro from "./introduction";
import banner from '/banner.png';


export default function Home() {

    return (
        <main className="flex flex-col h-full w-full">
            <img
                className="w-[60%] h-[60%] m-auto rounded-sm"
                src={banner}
            />
            
            <Intro />
        </main>
    );
}