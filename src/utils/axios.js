import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=utf-8",
    },
});

axiosClient.interceptors.request.use((config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;
