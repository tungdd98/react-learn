import React from "react";
import PropTypes from "prop-types";

const PhotoCard = ({ data: { id, name, src } }) => {
    return (
        <div className="photo">
            <img alt={name} src={src} className="img-fluid w-100" />
            <div className="photo__content text-white flex-center justify-content-between p-3">
                <div>{name}</div>
                <div>
                    <span className="icon icon-download px-3"></span>
                    <span className="icon icon-key"></span>
                </div>
            </div>
        </div>
    );
};

PhotoCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PhotoCard;
