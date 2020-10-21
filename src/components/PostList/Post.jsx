import React from "react";
import PropTypes from "prop-types";

const Post = (props) => {
    const { post } = props;
    return <li>{post.title}</li>;
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
    }).isRequired,
};

export default Post;
