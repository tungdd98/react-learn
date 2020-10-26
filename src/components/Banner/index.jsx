import React from "react";
import PropTypes from "prop-types";
import style from "./Banner.module.scss";

const Banner = (props) => {
    const { title, backgroundUrl } = props;
    const bannerStyle = backgroundUrl
        ? { backgroundImage: `url(${backgroundUrl})` }
        : {};
    return (
        <div className={style.banner} style={bannerStyle}>
            <div className={`absolute-center display-4 text-white`}>
                {title}
            </div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
};

Banner.defaultProps = {
    title: "",
    backgroundUrl: "",
};

export default Banner;
