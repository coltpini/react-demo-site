import {SET_TITLE} from './reducers.js';
import getPageTitle from './services.js';

/* Sync Action Creators */
export const setTitle = (title = ``) => ({
    type: SET_TITLE,
    title
});

/* Async Action Creators */
export const getTitle = () => (dispatch) => {
    getPageTitle()
    .then( (title) => {
        dispatch(setTitle(title))
    })
};
