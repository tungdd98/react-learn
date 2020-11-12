import React, { useEffect, useState } from "react";
import { Masonry } from "masonic";
import PhotoCard from "views/Photo/components/PhotoCard/PhotoCard";
import Header from "components/Header/Header";
import Banner from "components/Banner/Banner";
import Nav from "components/Nav/Nav";
import PhotoApi from "apis/photoApi";

const PhotoMain = () => {
  const [photos, setPhotos] = useState(null);
  const [active, setActive] = useState(true);
  const fetchData = async () => {
    const data = await PhotoApi.getPhotos({
      page: 1,
      limit: 10,
    });
    if (data) {
      setPhotos(data || []);
    }
  };
  useEffect(() => {
    active && fetchData();
    return () => {
      setActive(false);
    };
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Nav />
      <div className="container-fluid my-5 px-sm-5 px-2">
        <div className="font-weight-500 font-18 mb-2">Free Stock Photos</div>
        {photos && photos.length ? (
          <Masonry
            items={photos}
            render={PhotoCard}
            overscanBy={4}
            columnGutter={18}
            columnWidth={400}
            className="focus-none"
          />
        ) : (
          <div className="text-center">Empty photos</div>
        )}
      </div>
    </>
  );
};

export default PhotoMain;
