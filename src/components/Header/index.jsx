import React from "react";
import logo from "assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="position-relative">
            <div className="header-top position-absolute p-2 flex-center justify-content-between flex-wrap">
                <div className="flex-center">
                    <img src={logo} alt="logo" className="logo" />
                    <span className="font-weight-500 ml-1 font-18 text-white">
                        Pexels
                    </span>
                </div>
                <div className="flex-center">
                    <ul className="flex-center text-white">
                        <li className="px-3">Explore</li>
                        <li className="px-3">License</li>
                        <li className="px-3">
                            <NavLink to="/photos/add" className="text-white">
                                Upload
                            </NavLink>
                        </li>
                    </ul>
                    <button className="btn btn-success font-weight-500">
                        Join
                    </button>
                </div>
            </div>
            <div className="header-content absolute-center text-white px-2">
                <h1 className="font-weight-bold">
                    Photo by Ave Calvar Martinez The best free stock photos &
                    videos shared by talented creators.
                </h1>
                <div className="header-search">
                    <input
                        type="text"
                        placeholder="Search for free photos and videos"
                        className="form-control rounded-lg"
                    />
                </div>
                <p className="font-12 mt-1">
                    Suggested: christmas welcome jungle gun globe chocolate more
                </p>
            </div>
        </header>
    );
};

export default Header;
