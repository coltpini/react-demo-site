import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import nav from './siteNav/reducers.js';
import articleList from './articleList/reducers.js';
import socialList from './socialList/reducers.js';

import {isBrowser} from '../env.js';

// create the master reducer
const rootReducer = combineReducers({nav,articleList,socialList});


// determine initial state
const initialState = isBrowser && window.__INITIAL_STATE__ || {};


const reduxMiddleware = compose(
    applyMiddleware(thunk),
    isBrowser && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
);


// export a store creator factory with initial state if present...
export default () => createStore( rootReducer, initialState, reduxMiddleware );
