import { Component as ReactComponent } from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../store/articleList/actions.js';
import selectArticles from '../store/articleList/selectors.js';

import { getPosts } from '../store/socialList/actions.js';
import selectPosts from '../store/socialList/selectors.js';

import Landing from 'colt-demo-landing';


class LandingContainer extends ReactComponent {
    componentDidMount() {
        const {loadArticles, loadPosts} = this.props;
        loadArticles();
        loadPosts();
    }
    render() {
        return <Landing {...this.props} />
    }
}

const mapStateToProps = (state) => {
    const articles = selectArticles(state);
    const posts = selectPosts(state);
    return {
        tiles: articles || [],
        socialItems: posts || []
    }
}

const mapActionsToDispatch = (dispatch) => ({
    loadArticles: () => dispatch( getArticles() ),
    loadPosts: () => dispatch( getPosts() )
});

const mergeProps = (state, actions) => ({
    ...state,
    ...actions,
    loadArticles: () => actions.loadArticles(),
    loadPosts: () => actions.loadPosts()
});

export default connect(mapStateToProps, mapActionsToDispatch, mergeProps)(LandingContainer);
