import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateModal } from "../../Actions/modalActions";
import { logout, checkUser } from "../../Actions/loginActions";
import PopeFrancis from "../../Components/PopeFrancis";
import Footer from "../../Components/Footer";
import "./index.sass";
import Login from "../../Components/Login";
import NavMenu from "../../Components/NavMenu";
import Profile from "../../Components/Profile";

export default function Dashboard({ children }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const statusLogin = useSelector(state => state.loginReducer.status);

  dispatch(checkUser());

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
  };
  const handleProfile = () => {
    dispatch(
      updateModal({
        payload: { status: true, element: <Profile />, customSize: "rule-a" }
      })
    );
  };

  const handeMenu = path => {
    history.push(path);
  };

  return (
    <div className="dashboard-container">
      <NavMenu />
      <div className="dashboard-container__main-header">
        <div className="dashboard-container__layer"></div>
        <header>
          <div
            className="dashboard-container__logo"
            onClick={() => handeMenu("/")}
          >
            Rule of Thumb
          </div>
          <div className="dashboard-container__menu">
            <div
              className="dashboard-container__item"
              onClick={() => handeMenu("/past-trials")}
            >
              Past Trials
            </div>
            <div
              className="dashboard-container__item"
              onClick={() => handeMenu("/how-it-works")}
            >
              How It Works
            </div>
            <div
              className="dashboard-container__item"
              onClick={() => handleLogin(statusLogin ? "logout" : "login")}
            >
              {statusLogin ? "logout" : "Log In / Sign Up"}
            </div>
            {statusLogin && (
              <div
                className="dashboard-container__item"
                onClick={() => handleProfile()}
              >
                Profile
              </div>
            )}
            <div className="dashboard-container__item">
              <div className="dashboard-container__item-search" />
            </div>
          </div>
        </header>
        <section className="dashboard-container__pope-comments">
          <PopeFrancis />
        </section>
        <section className="dashboard-container__counter-days">
          <div className="dashboard-container__closing-in">
            <div className="dashboard-container__arrow" />
            Closing in
          </div>
          <div className="dashboard-container__days">22 Days</div>
        </section>
      </div>
      <div className="dashboard-container__content">
        {children}
        <Footer />
      </div>
    </div>
  );
}
