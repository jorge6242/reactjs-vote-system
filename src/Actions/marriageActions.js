import Marriage from '../Api/Marriage';
import snackBarUpdate from '../Actions/snackBarActions';

export const ACTIONS = {
    GET_ALL: 'marriage/get_all',
};

export const getAll = () => async dispatch => {
    try {
        const {
            data,
            status
        } = await Marriage.getAll();
        let getAllMarriage = [];
        if (status === 200) {
            getAllMarriage = data;
            dispatch({
                type: ACTIONS.GET_ALL,
                payload: getAllMarriage
            });
        }
        return getAllMarriage;
    } catch (error) {
        snackBarUpdate({
            payload: {
                message: error.message,
                type: 'error',
                status: true,
            },
        })(dispatch);
        return error;
    }
};