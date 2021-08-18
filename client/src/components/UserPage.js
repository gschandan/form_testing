import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const UserPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserPage().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h1>I am a user, short and stout.</h1>
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default UserPage;