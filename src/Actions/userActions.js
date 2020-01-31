import User from '../Api/User';
import snackBarUpdate from '../Actions/snackBarActions';

export const ACTIONS = {
    UPDATE: 'user/update',
};

export const update = body => async dispatch => {
    try {
        const {
            data,
            status
        } = await User.update(body);
        let userResponse = [];
        if (status === 200) {
            userResponse = {
                data,
                status
            };
            snackBarUpdate({
                payload: {
                    message: 'Profile updated!',
                    status: true,
                    type: 'success',
                },
            })(dispatch);
        }
        return userResponse;
    } catch (error) {
        snackBarUpdate({
            payload: {
                title: error.message,
                type: 'error',
                enable: true,
            },
        })(dispatch);
        return error;
    }
};


export const checkEmail = email => async dispatch => {
    try {
        const {
            data,
            status
        } = await User.checkEmail(email);
        let getAllCandidates = [];
        if (status === 200) {
            getAllCandidates = { status ,data};
        }
        return getAllCandidates;
    } catch (error) {
        snackBarUpdate({
            payload: {
                title: error.message,
                type: 'error',
                enable: true,
            },
        })(dispatch);
        return error;
    }
};


