import {
    ACTIONS
} from '../Actions/candidateActions';

const initialState = {
    candidates: [],
};

const candidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                candidates: action.payload,
            };
        default:
            return state;
    }
};

export default candidateReducer;