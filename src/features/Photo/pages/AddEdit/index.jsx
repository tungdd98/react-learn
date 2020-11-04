import React from "react";
import Banner from "components/Banner";
import PhotoForm from "components/PhotoForm";
import { IMAGES } from "utils/constants";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddEdit = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const editedPhoto = useSelector((state) =>
        state.photo.photos.find((photo) => photo.id === id)
    );
    const isEdit = !!editedPhoto;
    const initialValues = !isEdit
        ? {
              title: "",
              category: null,
              photo: "",
          }
        : editedPhoto;

    const handleSubmit = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!isEdit) {
                    dispatch(addPhoto(data));
                } else {
                    dispatch(updatePhoto(data));
                }
                history.push("/photos");
                resolve(true);
            }, 2000);
        });
    };

    return (
        <div>
            <Banner
                title="Pick your amazing photo"
                backgroundUrl={IMAGES.pinkBg}
            ></Banner>

            <PhotoForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                isEdit={isEdit}
            ></PhotoForm>
        </div>
    );
};

export default AddEdit;
