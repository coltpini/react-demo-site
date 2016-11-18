export const SET_SITE_NAV = `SET_SITE_NAV`;

export default (state = [], {type, nav = [] } ) => {
    switch(type) {
        case SET_SITE_NAV:
            return nav;

        default:
            return state;
    }
};
