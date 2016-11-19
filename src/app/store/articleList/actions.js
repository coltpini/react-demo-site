import {ADD_ARTICLE, CLEAR_ARTICLES} from './reducers.js';
import getArticleList from './services.js';

/* Sync Action Creators */
export const addArticle = (articles = []) => ({
    type: ADD_ARTICLE,
    articles: articles
});

export const clearArticles = () => ({type: CLEAR_ARTICLES});

/* Async Action Creators */
export const getArticles = () => (dispatch) => {
    getArticleList()
    .then( (articles) => {
        articles.forEach((article) => {
            dispatch(addArticle(article))
        })
    })
};
