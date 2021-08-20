import instance from "./api.interceptor"

const getPublicContent = () => {
  return instance.get("test/all");
};

const getUserPage = () => {
  return instance.get("test/user");
};

const getAdminPage = () => {
  return instance.get("test/admin");
};

const UserService =  {
  getPublicContent,
  getUserPage,
  getAdminPage,
};

export default UserService