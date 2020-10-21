import React from "react";
import style from "./MagicColor.module.scss";
import useMagicColor from "../../hooks/useMagicColor";

const MagicColor = () => {
    const { color } = useMagicColor();
    return (
        <div>
            <h4>Magic color app</h4>
            <div
                className={style.boxColor}
                style={{ backgroundColor: color }}
            ></div>
        </div>
    );
};

export default MagicColor;
