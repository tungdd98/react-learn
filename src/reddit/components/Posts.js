import React from "react";
import propTypes from "prop-types";

const Posts = ({ posts }) => (
    <ul>
        {posts.map((post, idx) => (
            <li key={idx}>{post.title}</li>
        ))}
    </ul>
);

Posts.propTypes = {
    posts: propTypes.array.isRequired,
};

export default Posts;
