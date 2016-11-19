import {ADD_POST, CLEAR_POSTS} from './reducers.js';
import getSocialList from './services.js';

/* Sync Action Creators */
export const addPost = (post = []) => ({
    type: ADD_POST,
    post: post
});

export const clearPosts = () => ({type: CLEAR_POSTS});

/* Async Action Creators */
export const getPosts = () => (dispatch) => {
    getSocialList()
    .then( (posts) => {
        posts.forEach((post) => {
            dispatch(addPost(post))
        })
    })
};
