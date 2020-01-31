import {
    ACTIONS
} from '../Actions/loginActions';

const initialState = {
    user: {
        username: '',
        email: '',
        age: 0,
    },
    status: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER:
            return {
                ...state,
                user: action.payload,
                status: true,
            };
        case ACTIONS.LOGOUT:
            localStorage.removeItem('token');
            console.log('LOGOUT');
            return {
                ...state, ...initialState
            };
        default:
            return state;
    }
};

export default userReducer;