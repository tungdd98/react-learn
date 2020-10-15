// Chọn 1 bài viết để hiển thị
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
// Hoặc nhấn nút
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";
// Load posts
export const REQUEST_POSTS = "REQUEST_POSTS";
// Nhận posts
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const selectSubreddit = (subreddit) => ({
    type: SELECT_SUBREDDIT,
    subreddit,
});

export const invalidateSubreddit = (subreddit) => ({
    type: INVALIDATE_SUBREDDIT,
    subreddit,
});

export const requestPosts = (subreddit) => ({
    type: REQUEST_POSTS,
    subreddit,
});

export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
});

export const fetchPosts = (subreddit) => {
    return async (dispatch) => {
        dispatch(requestPosts(subreddit));
        try {
            const response = await fetch(
                `https://www.reddit.com/r/${subreddit}.json`
            );
            const json = await response.json();
            return dispatch(receivePosts(subreddit, json));
        } catch (error) {
            return error;
        }
    };
};

const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
};

export const fetchPostsIfNeeded = (subreddit) => {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit));
        }
    };
};
