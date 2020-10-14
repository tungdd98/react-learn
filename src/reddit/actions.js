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
    return (dispatch) => {
        dispatch(requestPosts(subreddit));
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then((response) => response.json())
            .then((json) => dispatch(receivePosts(subreddit, json)));
    };
};
