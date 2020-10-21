import React, { useState } from "react";
import style from "./ColorBox.module.scss";

const random = (max = 5, min = 0) => Math.floor(Math.random() * max + min);
const colors = ["red", "green", "blue", "orange", "pink"];
const randomColor = () => colors[random()];

const ColorBox = () => {
    const [color, setColor] = useState(() => {
        const initialState =
            localStorage.getItem("text_color") || randomColor();
        return initialState;
    });
    const handleChangeColor = () => {
        const newColor = randomColor();
        setColor(newColor);
        localStorage.setItem("text_color", newColor);
    };
    return (
        <div>
            <h4>Color app</h4>
            <div
                className={style.boxColor}
                style={{ backgroundColor: color }}
                onClick={handleChangeColor}
            ></div>
        </div>
    );
};

export default ColorBox;
