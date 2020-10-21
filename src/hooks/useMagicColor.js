import { useState, useEffect, useRef } from "react";
import { randomColor } from "../utils/helpers";

const useMagicColor = () => {
    const [color, setColor] = useState(randomColor());
    const colorRef = useRef("transparent");
    useEffect(() => {
        const magicColorInterval = setInterval(() => {
            const newColor = randomColor(colorRef);
            setColor(newColor);
            colorRef.current = newColor;
        }, 2000);

        return () => {
            clearInterval(magicColorInterval);
        };
    }, []);

    return {
        color,
    };
};

export default useMagicColor;
