import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "components/Banner";
import { IMAGES } from "utils/constants";

const Main = () => {
    return (
        <div>
            <Banner
                title="Lorem ipsum dolor"
                backgroundUrl={IMAGES.blueBg}
            ></Banner>

            <Container className="text-center">
                <Link
                    to="/photos/add"
                    className="btn btn-outline-info btn-sm my-2"
                >
                    Add new photo
                </Link>
            </Container>
        </div>
    );
};

export default Main;
