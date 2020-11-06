import React, { useState } from "react";
import { Masonry } from "masonic";
import catNames from "cat-names";
import { cats } from "utils/constants";
import { v4 as uuidv4 } from "uuid";
import PhotoCard from "features/Photo/components/PhotoCard";

const randomChoice = (items) => items[Math.floor(Math.random() * items.length)];

const PhotoMain = () => {
    const [items] = useState(() =>
        Array.from(Array(50), () => ({
            id: uuidv4(),
            name: catNames.random(),
            src: randomChoice(cats),
        }))
    );
    return (
        <div>
            <div className="font-weight-500 font-18 mb-2">
                Free Stock Photos
            </div>
            <Masonry
                items={items}
                render={PhotoCard}
                overscanBy={4}
                columnGutter={18}
                columnWidth={400}
            />
        </div>
    );
};

export default PhotoMain;
