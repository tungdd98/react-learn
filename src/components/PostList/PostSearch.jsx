import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const PostSearch = (props) => {
    const { onSubmit } = props;
    const [search, setSearch] = useState("");
    const typingTimeoutRef = useRef(null);
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (!onSubmit) {
            return;
        }
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            onSubmit(value);
        }, 300);
    };
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearch}
                />
            </form>
        </div>
    );
};

PostSearch.propTypes = {
    onSubmit: PropTypes.func,
};

PostSearch.defaultProps = {
    onSubmit: null,
};

export default PostSearch;
