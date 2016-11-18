import { Component as ReactComponent } from 'react';
import { connect } from 'react-redux';

//import { search } from '../actions/facets.js';
//import { selectFacets } from '../store.js';

import Landing from 'colt-demo-landing';


class LandingContainer extends ReactComponent {
    // componentDidMount() {
    //     const {init} = this.props;
    //     return init && init();
    // }
    render() {
        return <Landing {...this.props} />
    }
}

// const mapStateToProps = (state) => {
//     const facets = selectFacets(state);
//     const [primaryFacets, secondaryFacets] = facets;
//
//     return {
//         primaryFacets: (primaryFacets||[])
//             .map( ({name: label, ...props}) => ({label, ...props}) ),
//         secondaryFacets: (secondaryFacets||[])
//             .map( ({name: label, ...props}) => ({label, ...props}) )
//     }
// }

// const mapActionsToDispatch = (dispatch) => ({
//     init: (query) => dispatch( search(query) )
// });

// const mergeAllTheThings = (state, actions, fromRouter) => ({
//     ...state,
//     ...actions,
//     init: () => actions.init(fromRouter.location.query)
// });

export default connect()(LandingContainer);
