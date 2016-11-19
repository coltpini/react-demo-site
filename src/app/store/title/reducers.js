export const SET_TITLE = `SET_TITLE`;

export default (state = [], {type, title = `` } ) => {
    switch(type) {
        case SET_TITLE:
            return title;
        default:
            return state;
    }
};
