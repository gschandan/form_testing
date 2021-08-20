import React, { useState, useEffect } from "react";
import Splash from "../assets/splash.png"
import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <img 
        src={Splash} 
        alt="logo"
        style={{
          width: "100vw",
          position: "absolute",
          top: 0,
          zIndex: -1
        }}
      />
    </div>
  );
};

export default Home;