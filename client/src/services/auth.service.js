import axios from "axios";
import { API_URL } from "../config";

const USER_AUTH_URL = API_URL + "auth/";

const register = (userName, displayName, password) => {
  return axios.post(USER_AUTH_URL + "signup", {
    userName,
    displayName,
    password,
  });
};

const login = (userName, password) => {
  return axios
    .post(USER_AUTH_URL + "signin", {
      userName,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser, 
}

export default AuthService