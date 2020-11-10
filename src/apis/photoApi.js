import apis from "utils/apis";
import axios from "utils/axios";

const PhotoApi = {
    getPhotos: async (params) => {
        try {
            const response = await axios.get(apis.photos, { params });
            return response;
        } catch (error) {
            return error;
        }
    },
};

export default PhotoApi;
