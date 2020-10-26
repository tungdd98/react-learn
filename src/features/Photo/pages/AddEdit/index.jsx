import React from "react";
import Banner from "components/Banner";
import PhotoForm from "components/PhotoForm";
import { IMAGES } from "utils/constants";

const AddEdit = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };
    return (
        <div>
            <Banner
                title="Pick your amazing photo"
                backgroundUrl={IMAGES.pinkBg}
            ></Banner>

            <PhotoForm onSubmit={handleSubmit}></PhotoForm>
        </div>
    );
};

export default AddEdit;
