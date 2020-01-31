import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../Actions/loginActions";
import { updateModal } from "../../Actions/modalActions";
import "./index.sass";
import Login from "../Login";

export default function NavMenu() {
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const statusLogin = useSelector(state => state.loginReducer.status);

  const handleToolbar = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const handeMenu = path => {
    history.push(path);
    setMenu(false);
  };

  const handleLogin = type => {
    if (type === "login") {
      dispatch(
        updateModal({
          payload: { status: true, element: <Login />, customSize: "rule-a" }
        })
      );
    } else {
      dispatch(logout());
    }
    setMenu(false);
  };

  return (
    <div class="mobile-container">
      <div class="mobile-container__topnav">
        <div class="mobile-container__topnav-header">
          <div class="mobile-container__logo" onClick={() => handeMenu("/")}>
            Rule of Thumb
          </div>
          <div class="mobile-container__icon" onClick={() => handleToolbar()}>
            <div />
          </div>
        </div>
        <div
          className={`mobile-container__menu mobile-container__menu--${
            menu ? "active" : ""
          } `}
        >
          <div
            className="mobile-container__menu-item"
            onClick={() => handeMenu("/past-trials")}
          >
            Past Trials
          </div>
          <div
            className="mobile-container__menu-item"
            onClick={() => handeMenu("/how-it-works")}
          >
            How It Works
          </div>
          <div
            className="mobile-container__menu-item"
            onClick={() => handleLogin(statusLogin ? "logout" : "login")}
          >
            {statusLogin ? "logout" : "Log In / Sign Up"}
          </div>
        </div>
      </div>
    </div>
  );
}
