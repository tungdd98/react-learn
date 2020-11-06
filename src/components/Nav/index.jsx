import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="w-nav flex-center shadow-sm sticky-top bg-white">
            <li>
                <NavLink to="/photos" className="p-3 font-weight-500 font-17">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/discover" className="p-3 font-weight-500 font-17">
                    Discover
                </NavLink>
            </li>
            <li>
                <NavLink to="/videos" className="p-3 font-weight-500 font-17">
                    Videos
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/leaderboard"
                    className="p-3 font-weight-500 font-17"
                >
                    Leaderboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/challenges"
                    className="p-3 font-weight-500 font-17"
                >
                    Challenges
                </NavLink>
            </li>
        </ul>
    );
};

export default Nav;
