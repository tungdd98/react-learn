import apis from "utils/apis";
import axios from "utils/axios";

const PhotoApi = {
  getPhotos: async (params) => {
    try {
      const response = await axios.get("/photos", { params });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  uploadPhoto: async (data) => {
    try {
      const response = await axios.post(apis.photos, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default PhotoApi;
