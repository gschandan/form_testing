import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config";

const USER_URL = API_URL + "test/";

const getPublicContent = () => {
  return axios.get(USER_URL + "all");
};

const getUserPage = () => {
  return axios.get(USER_URL + "user", { headers: authHeader() });
};

const getAdminPage = () => {
  return axios.get(USER_URL + "admin", { headers: authHeader() });
};

const UserService =  {
  getPublicContent,
  getUserPage,
  getAdminPage,
};

export default UserService