export const ADD_ARTICLE = `ADD_ARTICLES`;
export const CLEAR_ARTICLES = `CLEAR_ARTICLES`;

export default function(state = [], {type, article } ) {
    switch(type) {
        case CLEAR_ARTICLES:
            return [];
            
        case ADD_ARTICLE:
            return [
                ...state,
                article
            ];

        default:
            return state;
    }
}
