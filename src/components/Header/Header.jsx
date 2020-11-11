import React from "react";
import PropTypes from "prop-types";
import useWindowScroll from "@react-hook/window-scroll";
import { NavLink } from "react-router-dom";
import logo from "assets/logo.svg";

const Header = (props) => {
  const { showBg } = props;
  const scrollY = useWindowScroll(5);
  const setPropertyHeader = () => {
    if (!showBg) {
      return scrollY > 60 ? `bg-dark sticky-top` : `absolute-fluid`;
    }
    return `bg-dark`;
  };
  return (
    <header className={`${setPropertyHeader()} p-2 flex-center flex-wrap`}>
      <div className="flex-center">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
          <span className="font-weight-500 ml-1 font-18 text-white">
            Pexels
          </span>
        </NavLink>
      </div>
      {(scrollY > 60 || showBg) && (
        <div className="pl-5">
          <input
            type="text"
            placeholder="Search for free photos"
            className="form-control form-control-lg font-14"
            style={{ minWidth: "400px" }}
          />
        </div>
      )}
      <div className="ml-auto flex-center">
        <ul className="flex-center text-white">
          <li className="px-3">Explore</li>
          <li className="px-3">License</li>
          <li className="px-3">
            <NavLink to="/photos/add" className="text-white">
              Upload
            </NavLink>
          </li>
        </ul>
        <NavLink to="/login" className="btn btn-success font-weight-500">
          Join
        </NavLink>
      </div>
    </header>
  );
};

Header.propTypes = {
  showBg: PropTypes.bool,
};

Header.defaultProps = {
  showBg: false,
};

export default Header;
