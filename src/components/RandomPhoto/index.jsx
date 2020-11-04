import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import style from "./RandomPhoto.module.scss";

const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto = (props) => {
    const {
        name,
        imageUrl,
        onImageUrlChange,
        onRandomButtonBlue,
        className,
    } = props;
    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    };
    return (
        <div className={className}>
            <Button
                outline
                color="info"
                name={name}
                onClick={handleRandomPhotoClick}
                onBlur={onRandomButtonBlue}
            >
                Random a photo
            </Button>
            <div
                className={`overflow-hidden rounded shadow-sm my-2 bg-light ${style.photoImage}`}
            >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Oppps..."
                        className="img-fluid h-100"
                        onError={handleRandomPhotoClick}
                    />
                )}
            </div>
        </div>
    );
};

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    className: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlue: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: "",
    imageUrl: "",
    className: "",
    onImageUrlChange: null,
    onRandomButtonBlue: null,
};

export default RandomPhoto;
