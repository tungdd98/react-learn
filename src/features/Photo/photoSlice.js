import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const photo = createSlice({
    name: "photo",
    initialState: {
        photos: [],
    },
    reducers: {
        addPhoto: (state, action) => {
            state.photos.push({
                id: uuidv4(),
                ...action.payload,
            });
        },
        removePhoto: (state, action) => {
            return {
                ...state,
                photos: state.photos.filter(
                    (photo) => photo.id !== action.payload
                ),
            };
        },
        updatePhoto: (state, action) => {
            const editedPhoto = action.payload;
            return {
                ...state,
                photos: state.photos.map((photo) =>
                    photo.id === editedPhoto.id ? editedPhoto : photo
                ),
            };
        },
    },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
