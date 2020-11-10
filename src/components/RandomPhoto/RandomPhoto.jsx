import React from "react";
import PropsType from "prop-types";
import noimage from "assets/images/noimage.jpg";

const getRandomImageUrl = (options) => {
    const { size } = options;
    const id = Math.floor(Math.random() * 2000);
    return `https://picsum.photos/id/${id}/${size}`;
};

const RandomPhoto = (props) => {
    const {
        name,
        imageUrl,
        onImageUrlChange,
        onRandomButtonBlur,
        className,
        options,
    } = props;
    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl(options);
            onImageUrlChange(randomImageUrl);
        }
    };
    return (
        <div className={className}>
            <button
                className="btn btn-outline-info"
                name={name}
                onClick={handleRandomPhotoClick}
                onBlur={onRandomButtonBlur}
                type="button"
            >
                Random photo
            </button>
            <div>
                <img
                    src={imageUrl || noimage}
                    alt="Oppps..."
                    className="overflow-hidden shadow-sm my-2 img-thumbnail"
                    onError={handleRandomPhotoClick}
                />
            </div>
        </div>
    );
};

RandomPhoto.propsType = {
    name: PropsType.string,
    imageUrl: PropsType.string,
    onImageUrlChange: PropsType.func,
    onRandomButtonBlur: PropsType.func,
    className: PropsType.string,
    options: PropsType.object,
};

RandomPhoto.defaultProps = {
    name: "",
    imageUrl: "",
    onImageUrlChange: null,
    onRandomButtonBlur: null,
    className: "",
    options: null,
};

export default RandomPhoto;
