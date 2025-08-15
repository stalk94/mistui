import React from "react";
import ReactDOMServer from "react-dom/server";


export default function iconToMaskStyle(
    Icon: React.ComponentType<{ size?: number; color?: string }>,
    {
        size = 64,
        color = "black"
    }: { size?: number; color?: string } = {}
) {
    const svgString = encodeURIComponent(
        ReactDOMServer.renderToStaticMarkup(<Icon size={size} color={color} />)
    );

    const maskUrl = `url("data:image/svg+xml,${svgString}")`;

    return {
        WebkitMaskImage: maskUrl,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskImage: maskUrl,
        maskRepeat: "no-repeat",
        maskSize: "cover"
    } as React.CSSProperties;
}