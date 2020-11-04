import React from "react";
import PropTypes from "prop-types";
import { Col, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Photo = (props) => {
    const { photo, removePhoto } = props;
    return (
        <Col xs="12" sm="6">
            {photo && (
                <div className="photo-item mt-5 shadow">
                    <img src={photo.photo} alt={photo.title} />
                    <div className="photo-item__content flex-center flex-column">
                        <p className="photo-item__title">{photo.title}</p>
                        <div className="photo-item__actions">
                            <NavLink to={`/photos/${photo.id}`}>
                                <Button
                                    size="sm"
                                    color="warning"
                                    className="mx-1"
                                >
                                    Edit
                                </Button>
                            </NavLink>
                            <Button
                                size="sm"
                                color="danger"
                                className="mx-1"
                                onClick={() => removePhoto(photo.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Col>
    );
};

Photo.propTypes = {
    photo: PropTypes.object,
    removePhoto: PropTypes.func,
};

Photo.defaultProps = {
    photo: null,
    removePhoto: null,
};

export default Photo;
