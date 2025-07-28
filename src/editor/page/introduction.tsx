import { Typography } from "@/components/text";


const Segment =({ children, label })=> (
    <>
        <div className='flex items-center'>
            <span className="h-8 w-8 bg-base-content/5 hover:bg-base-content/10 text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 transition-all group">
                <svg className="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width="1.5em" height="1.5em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z">
                    </path>
                </svg>
            </span>
            <Typography variant="h5">
                { label }
            </Typography>
        </div>
        <Typography variant="body2" className='pl-12'>
            { children }
        </Typography>
    </>
);



export default function Intro() {

    return (
        <main className="flex flex-col h-full w-full space-y-2 p-8">
            <Segment
                label={
                    <>
                        What is <b>mistUI?</b>
                    </>
                }
            >
                These class names are a high-level abstraction of Tailwind CSS utility classes.
            </Segment>
            
            <Segment
                label={
                    <>
                        
                    </>
                }
            >
                
            </Segment>

            <Segment
                label={
                    <>
                        How does mistUI fit in Atomic Design principles?
                    </>
                }
            >
                Atomic Design is a methodology for creating design systems. It breaks down the UI into smaller parts, like atoms, molecules, organisms, etc.

You can think of Tailwind CSS utility classes as atoms. They are the smallest parts of the UI that you can use to build larger parts. daisyUI classes are like molecules and organisms. They are higher-level abstractions of the UI parts that are made of atoms.

Larger parts of the UI, like templates and pages are quickly possible by putting these molecules and organisms together in layouts, using grid or flexbox, and adding functionality and content to them.
            </Segment>
        </main>
    );
}