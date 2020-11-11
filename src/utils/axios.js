import axios from "axios";
import firebase from "firebase";
import { setLoading } from "components/Loading/loadingSlice";
import store from "app/store";

const axiosClient = axios.create({
  baseURL: "https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=utf-8",
  },
});

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    return currentUser.getIdToken();
  }
  // Not logged in
  const hasRememberToken = window.localStorage.getItem("firebase-token");
  if (!hasRememberToken) {
    return null;
  }
  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject(null);
    }, 10000);
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          reject(null);
        }
        const token = await user.getIdToken();
        resolve(token);
        unregisterAuthObserver();
        clearTimeout(waitTimer);
      });
  });
};

const onRequest = async (config) => {
  store.dispatch(setLoading(true));
  const token = await getFirebaseToken();
  if (token) {
    //config.headers.common.Authorization = `Bearer ${token}`;
  }
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
