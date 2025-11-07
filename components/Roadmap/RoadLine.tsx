import { useEffect, useRef } from 'react';
import { gsap } from "@/helpers/gsap";

const RoadLine = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        let svgPath = svgRef.current.querySelector('path');

        if (!svgPath) return;

        // Get the total length of the path
        const pathLength = svgPath.getTotalLength();

        // Set up initial styles
        gsap.set(svgPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        // Create the animation
        gsap.to(svgPath, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: svgPath,
                scrub: 1,
                start: 'top center',
                end: 'bottom center',
            },
        });
    }, []);

    return (
        <svg ref={svgRef} className="roadline" width="1587" height="1386" viewBox="0 0 1587 1386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4C110.5 248.5 426.2 562.7 933 383.5C1566.5 159.5 1096 837.5 393 682.5C-310 527.5 841 1526 1277 996C1371.5 958 1563.7 992.2 1576.5 1385" stroke="#836FFE" strokeWidth="20" />
        </svg>
    );
};

export default RoadLine;
