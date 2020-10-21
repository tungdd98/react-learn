import React, { useState, useEffect } from "react";
import queryString from "query-string";
import Post from "./Post";
import Pagination from "../Pagination/Pagination";
import PostSearch from "./PostSearch";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });
    const handleChangePage = (page) => {
        setFilters({
            ...filters,
            _page: page,
        });
    };
    const handleSearchPost = (search) => {
        setFilters({
            ...filters,
            title_like: search,
            _page: 1,
        });
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                setPagination(pagination);
                setPosts(data);
            } catch (error) {
                console.log("Fail to fetch posts ", error.messages);
            }
        };
        fetchPosts();
    }, [filters]);
    return (
        <div>
            <h4>PostList app</h4>
            <PostSearch onSubmit={handleSearchPost} />
            <ul>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </ul>
            <Pagination
                pagination={pagination}
                onChangePage={handleChangePage}
            />
        </div>
    );
};

export default PostList;
