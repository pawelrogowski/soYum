const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from "axios";
import Cookies from "js-cookie";

import { store } from "../store";
import { refreshToken } from "./userAPI";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data.message === "Token Expired"
    ) {
      originalRequest._retry = true;
      await store.dispatch(refreshToken());
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
