import burgeropen from "../../assets/burgeropen.svg";
import burgerclose from "../../assets/burgerclose.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [click, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!click);

  return (
    <header className="header header-navigation">
      <div className="header-navigation-desktop">
        <Link to="/">
          <h1 className="header-logo">NM</h1>
        </Link>
        <div className="header-primary-menu">
          <ul className="primary-menu__list">
            <li className="primary-menu__item">
              <Link to="cv">CV</Link>
            </li>
            <li className="primary-menu__item">
              {" "}
              <Link to="projects">Projects</Link>
            </li>
            <li className="primary-menu__item primary-menu__item-contact primary-button">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-navigation-mobile">
        <div className="header-navigation-mobile__container">
          {" "}
          <Link to="/">
            <h1 className="header-logo">NM</h1>
          </Link>
          <div className="header-burger" onClick={handleClickMenu}>
            {/* CHANGE BURGER ICON DEPENDING ON CLICK */}
            {click ? (
              <img
                className="hamburger-open"
                src={burgerclose}
                alt="hamburger-menu-close"
              />
            ) : (
              <img
                className="hamburger-close"
                src={burgeropen}
                alt="hamburger-menu-open"
              />
            )}
          </div>
        </div>
        {/* SHOW MOBILE MENU DEPENDING ON CLICK */}
        <div
          className={
            click
              ? "header-navigation-mobile__menu active"
              : "header-navigation-mobile__menu"
          }
        >
          <ul className="header-navigation-mobile__menu-list">
            <li className="header-navigation-mobile__menu-item">
              <Link to="/cv">CV</Link>
            </li>
            <li className="header-navigation-mobile__menu-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="header-navigation-mobile__menu-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
