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
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("Refreshing token...");
      const result = await store.dispatch(refreshToken());
      if (refreshToken.fulfilled.match(result)) {
        console.log("Refresh token result:", result);
        return api(originalRequest);
      } else {
        console.log("Failed to refresh token:", result.error.message);
        return Promise.reject(result.error);
      }
    }
    return Promise.reject(error);
  }
);
