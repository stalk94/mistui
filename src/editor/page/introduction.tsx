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
        <main className="flex flex-col h-full w-full space-y-2 p-8" style={{ fontFamily: '"Inter", sans-serif' }}>
            <Segment
                label={
                    <>
                        What is <b>mistUI?</b>
                    </>
                }
            >
                mistUI is a modern UI library focused on simplicity, flexibility, and real-world usability. It draws inspiration from MUI, Tailwind, DaisyUI, and Atomic Design — but without the complexity, "magic," or headaches.
            </Segment>

            <Segment
                label={
                    <>
                        Why should I use <b>mistUI?</b>
                    </>
                }
            >
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>Fast, flexible components — ready to use and customize</li>
                    <li>Perfect base for your own design system</li>
                    <li>Feels familiar if you've used MUI, Tailwind, or DaisyUI</li>
                    <li>Built to scale with your project — strong typing, easy overrides, auto palette</li>
                    <li>Minimal dependencies — no styled-components or emotion</li>
                    <li>No "magic" — transparent styles, predictable behavior</li>
                    <li>Supports both controlled and uncontrolled inputs with hybrid state logic</li>
                    <li>Components follow Atomic Design principles for better structure</li>
                    <li>Ideal for building visual editors and UI builders</li>
                    <li>Playground for live experimenting with props and styles</li>
                    <li>Lightweight, optimized for performance and real-world usage</li>
                    <li>Easy to theme, extend, and adapt to your brand</li>
                </ul>
            </Segment>

            <Segment
                label={
                    <>
                        How does <b>mistUI</b> fit in Atomic Design principles?
                    </>
                }
            >
                Atomic Design is a methodology for creating design systems. It breaks down the UI into smaller parts, like atoms, molecules, organisms, etc.
                They are the smallest parts of the UI that you can use to build larger parts. MistUI components are like molecules and organisms.
                Larger parts of the UI, like templates and pages, are quickly possible by combining these molecules and organisms using layouts, grid/flexbox, and adding content.
            </Segment>

            <Segment
                label={
                    <>
                        Can I use <b>mistUI</b> with other UI frameworks?
                    </>
                }
            >
                Yes, as long as they do not conflict with mistUI’s styling system or theming engine.
            </Segment>

            <Segment
                label={
                    <>
                        Is there a <b>playground</b> to try components?
                    </>
                }
            >
                Yes! Just visit any component page — at the top, you'll find a switch to toggle between documentation and playground mode.
                <br />
                You can edit props, toggle styles, and test UI behavior in real time.
            </Segment>

            <Segment
                label={
                    <>
                        How does <b>theming</b> work in mistUI?
                    </>
                }
            >
                mistUI has a powerful theming system inspired by DaisyUI and MUI. You can override colors, sizes, shadows, font families, variants, and more — globally or per component.
                It's perfect for aligning with your brand or supporting multiple themes (like dark/light modes).
            </Segment>

            <Segment
                label={
                    <>
                        Is <b>mistUI</b> production-ready?
                    </>
                }
            >
                mistUI is currently under active development. While many components are stable and usable, documentation and some features are still being finalized.
                Use it in side projects or internal tools, and feel free to contribute or report issues on GitHub.
            </Segment>

            <Segment
                label={
                    <>
                        What’s the <b>philosophy</b> behind mistUI?
                    </>
                }
            >
                We believe in **simplicity over magic**.
                That means no over-abstractions, no magic props, and no hidden behavior. Everything is visible, debuggable, and intuitive.
            </Segment>
        </main>
    );
}