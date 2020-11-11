import React from "react";
import PropTypes from "prop-types";
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
          className="overflow-hidden shadow-sm my-2 img-thumbnail photo-image"
          onError={handleRandomPhotoClick}
        />
      </div>
    </div>
  );
};

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.object,
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
