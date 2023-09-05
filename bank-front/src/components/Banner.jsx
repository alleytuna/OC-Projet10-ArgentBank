import React from "react";

// assets
import userIcon from '../assets/user.svg'
import logoutIcon from '../assets/logout.svg'
import Logo from "../assets/argentBankLogo.png";
import "../styles/main.css";

export default function Banner(user) {
  return (
    <section>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./profile">
            <img className="icons" src={userIcon} alt="user icon" />
            {user.user.firstName}
          </a>
          <a className="main-nav-item" href="./">
          <img className="icons" src={logoutIcon} alt="logout icon" />
            Sign Out
          </a>
        </div>
      </nav>
    </section>
  );
}
