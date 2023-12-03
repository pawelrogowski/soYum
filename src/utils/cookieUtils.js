import Cookies from "js-cookie";

const accessTokenExpires = parseFloat(import.meta.env.VITE_ACCESS_TOKEN_EXPIRES);
const refreshTokenExpires = parseFloat(import.meta.env.VITE_REFRESH_TOKEN_EXPIRES);

export const setAccessToken = (accessToken) => {
  Cookies.set("accessToken", accessToken, {
    expires: accessTokenExpires,
    secure: true,
    sameSite: "Strict",
  });
};

export const setRefreshToken = (refreshToken) => {
  Cookies.set("refreshToken", refreshToken, {
    expires: refreshTokenExpires,
    secure: true,
    sameSite: "Strict",
  });
};

export const getRefreshToken = () => {
  return Cookies.get("refreshToken");
};

export const removeAccessToken = () => {
  Cookies.remove("accessToken");
};

export const removeRefreshToken = () => {
  Cookies.remove("refreshToken");
};
