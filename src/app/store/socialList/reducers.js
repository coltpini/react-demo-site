export const ADD_POST = `ADD_POST`;
export const CLEAR_POSTS = `CLEAR_POSTS`;

export default function(state = [], {type, post } ) {
    console.log(state, post);
    switch(type) {
        case CLEAR_POSTS:
            return [];

        case ADD_POST:
            return [
                ...state,
                post
            ];

        default:
            return state;
    }
}
