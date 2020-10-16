// useEffect = componentDidMount + componentDidUpdate
import React, { useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit,
} from "../actions";
import Picker from "./Picker";
import Posts from "./Posts";

const AsyncApp = ({
    posts,
    dispatch,
    isFetching,
    lastUpdated,
    selectedSubreddit,
}) => {
    const handleChange = (nextSubreddit) => {
        dispatch(selectSubreddit(nextSubreddit));
        dispatch(fetchPostsIfNeeded(nextSubreddit));
    };
    const handleRefreshClick = (e) => {
        e.preventDefault();
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    };
    useEffect(() => {
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    });
    return (
        <div>
            <Picker
                value={selectedSubreddit}
                onChange={handleChange}
                options={["reactjs", "frontend"]}
            />
            <p>
                {lastUpdated && (
                    <span>
                        Last updated at{" "}
                        {new Date(lastUpdated).toLocaleTimeString()}.{" "}
                    </span>
                )}
                {!isFetching && (
                    <button onClick={handleRefreshClick}>Refresh</button>
                )}
            </p>
            {isFetching && posts.length === 0 && <h2>Loading...</h2>}
            {!isFetching && posts.length === 0 && <h2>Empty</h2>}
            {posts.length > 0 && (
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts} />
                </div>
            )}
        </div>
    );
};

AsyncApp.propTypes = {
    selectedSubreddit: propTypes.string.isRequired,
    posts: propTypes.array.isRequired,
    isFetching: propTypes.bool.isRequired,
    lastUpdated: propTypes.number.isRequired,
    dispatch: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const { selectedSubreddit, postsBySubreddit } = state;
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
        selectedSubreddit
    ] || {
        isFetching: true,
        items: [],
    };
    console.log(state);

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated,
    };
};

export default connect(mapStateToProps)(AsyncApp);
