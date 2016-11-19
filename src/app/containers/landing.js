import { Component as ReactComponent } from 'react';
import { connect } from 'react-redux';


import { getArticles } from '../store/articleList/actions.js';
import selectArticles from '../store/articleList/selectors.js';

import Landing from 'colt-demo-landing';


class LandingContainer extends ReactComponent {
    componentDidMount() {
        const {init} = this.props;
        return init && init();
    }
    render() {
        return <Landing {...this.props} />
    }
}

const mapStateToProps = (state) => {
    const articles = selectArticles(state);
    return {
        tiles: articles || []
    }
}

const mapActionsToDispatch = (dispatch) => ({
    init: () => dispatch( getArticles() )
});

const mergeProps = (state, actions) => ({
    ...state,
    ...actions,
    init: () => actions.init()
});

export default connect(mapStateToProps, mapActionsToDispatch, mergeProps)(LandingContainer);
