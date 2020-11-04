import React from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { IMAGES } from "utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { removePhoto } from "features/Photo/photoSlice";
import Photo from "features/Photo/components/Photo";
import Banner from "components/Banner";

const Main = () => {
    const photos = useSelector((state) => state.photo.photos);
    console.log(photos);
    const dispatch = useDispatch();
    const handleRemovePhoto = (id) => {
        dispatch(removePhoto(id));
    };
    return (
        <div>
            <Banner
                title="Lorem ipsum dolor"
                backgroundUrl={IMAGES.blueBg}
            ></Banner>

            <Container className="text-center">
                <Link to="/photos/add" className="btn btn-outline-info my-2">
                    Add new photo
                </Link>
                <Row>
                    {photos.map((photo) => (
                        <Photo
                            key={photo.id}
                            photo={photo}
                            removePhoto={handleRemovePhoto}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Main;
