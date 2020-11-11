import axios from "axios";
import { setLoading } from "components/Loading/loadingSlice";
import store from "app/store";

const axiosClient = axios.create({
  baseURL: "https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=utf-8",
  },
});

const onRequest = (config) => {
  store.dispatch(setLoading(true));
  return config;
};

const onSuccess = (response) => {
  store.dispatch(setLoading(false));
  return response.data;
};

const onError = (error) => {
  store.dispatch(setLoading(false));
  return Promise.reject(error);
};

axiosClient.interceptors.request.use(onRequest);
axiosClient.interceptors.response.use(onSuccess, onError);

export default axiosClient;
