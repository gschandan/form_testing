import TokenService from "./token.service.js";
import instance from "./api.interceptor";

const register = (userName, displayName, password) => {
  return instance.post("auth/signup", {
    userName,
    displayName,
    password,
  });
};

const login = (userName, password) => {
  return instance
    .post("auth/signin", {
      userName,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }
      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return TokenService.getUser();
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser, 
}

export default AuthService