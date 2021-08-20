import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import EditProfile from "./components/EditProfile";
import AdminPage from "./components/AdminPage";
import {SubmitProject} from "./components/ProjectSubmit"

const App = () => {
  const [showAdminPage, setShowAdminPage] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminPage(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav style={{
        marginTop: "1em",
        display: "flex",
        justifyContent:"space-evenly",
        listStyleType: "none",
        overflow:"hidden"
      }}>
        <Link to={"/"}>
          AztechCorp
        </Link>
          <li>
            <Link to={"/home"} >
              Home
            </Link>
          </li>

          {showAdminPage && (
            <li>
              <Link to={"/admin"}>
                Admin Board
              </Link>
            </li>
          )}

        {currentUser ? (
          <>
            <li>
              <Link to={"/edit-profile"}>
                My Profile
              </Link>
            </li>
            <li>
            <Link to= {"/submit"}>
                Submit a new project
            </Link>                 
            </li>
            <li>
              <a href="/" onClick={logOut}>
                LogOut
              </a>
            </li>
            </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>
                Login
              </Link>
            </li>

            <li>
              <Link to={"/register"}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </nav>

      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/submit" component={SubmitProject} />
        </Switch>
      </div>
    </div>
  );
};

export default App;