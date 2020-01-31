import React, { useState } from "react";

import "./index.sass";

export default function NavMenu() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <div class="mobile-container">
      <div class="mobile-container__topnav">
        <div class="mobile-container__topnav-header">
        <div class="mobile-container__logo">Rule of Thumb</div>
        <div class="mobile-container__icon" onClick={() => handleMenu()}>
         <div />
        </div>
        </div>
        <div
          className={`mobile-container__menu mobile-container__menu--${
            menu ? "active" : ""
          } `}
        >
          <div href="#news">Past Trials</div>
          <div href="#contact">How It Works</div>
          <div href="#about">Log In / Sign Up</div>
        </div>

      </div>
    </div>
  );
}
