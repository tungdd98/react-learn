import React, { useEffect, useState } from "react";
import { Masonry } from "masonic";
import catNames from "cat-names";
import { cats } from "utils/constants";
import { v4 as uuidv4 } from "uuid";
import PhotoCard from "features/Photo/components/PhotoCard";
import Header from "components/Header/Header";
import Banner from "components/Banner/Banner";
import Nav from "components/Nav/Nav";
import PhotoApi from "apis/photoApi";

const randomChoice = (items) => items[Math.floor(Math.random() * items.length)];

const PhotoMain = () => {
    const [items] = useState(() =>
        Array.from(Array(50), () => ({
            id: uuidv4(),
            name: catNames.random(),
            src: randomChoice(cats),
        }))
    );
    const [photos, setPhotos] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await PhotoApi.getPhotos({
                page: 1,
                limit: 10,
            });
            if (data) {
                console.log(data);
                setPhotos(data || []);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Header />
            <Banner />
            <Nav />
            <div className="container-fluid my-5">
                <div className="font-weight-500 font-18 mb-2">
                    Free Stock Photos
                </div>
                {photos && (
                    <Masonry
                        items={photos}
                        render={PhotoCard}
                        overscanBy={4}
                        columnGutter={18}
                        columnWidth={400}
                    />
                )}
            </div>
        </>
    );
};

export default PhotoMain;
