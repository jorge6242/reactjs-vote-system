import {
    ACTIONS
} from '../Actions/marriageActions';

const initialState = {
    marriages: [],
};

const marriageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                marriages: action.payload,
            };
        default:
            return state;
    }
};

export default marriageReducer;