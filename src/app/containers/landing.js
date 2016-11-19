import { Component as ReactComponent } from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../store/articleList/actions.js';
import selectArticles from '../store/articleList/selectors.js';

import { getPosts } from '../store/socialList/actions.js';
import selectPosts from '../store/socialList/selectors.js';

import { getTitle } from '../store/title/actions.js';
import selectTitle from '../store/title/selectors.js';

import Landing from 'colt-demo-landing';


class LandingContainer extends ReactComponent {
    componentDidMount() {
        const {loadArticles, loadPosts, loadTitle} = this.props;
        loadArticles();
        loadPosts();
        loadTitle();
    }
    render() {
        return <Landing {...this.props} />
    }
}

const mapStateToProps = (state) => {
    const articles = selectArticles(state);
    const posts = selectPosts(state);
    const title = selectTitle(state);

    return {
        tiles: articles.slice(1) || [],
        socialItems: posts || [],
        mainTile: articles[0],
        title: title
    }
}

const mapActionsToDispatch = (dispatch) => ({
    loadArticles: () => dispatch( getArticles() ),
    loadPosts: () => dispatch( getPosts() ),
    loadTitle: () => dispatch( getTitle() )
});

const mergeProps = (state, actions) => ({
    ...state,
    ...actions,
    loadArticles: () => actions.loadArticles(),
    loadPosts: () => actions.loadPosts(),
    loadTitle: () => actions.loadTitle()
});

export default connect(mapStateToProps, mapActionsToDispatch, mergeProps)(LandingContainer);
