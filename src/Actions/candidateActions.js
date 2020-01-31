import Candidate from '../Api/Candidate';
import snackBarUpdate from '../Actions/snackBarActions';

export const ACTIONS = {
    GET_ALL: 'candidate/get_all',
};

export const getAll = () => async dispatch => {
    try {
        const {
            data,
            status
        } = await Candidate.getAll();
        let getAllCandidates = [];
        if (status === 200) {
            getAllCandidates = data;
            dispatch({
                type: ACTIONS.GET_ALL,
                payload: getAllCandidates
            });
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


export const createCandidateVote = body => async dispatch => {
    try {
        const {
            data,
            status
        } = await Candidate.createCandidateVote(body);
        let createProductResponse = [];
        if (status === 200 || status === 201) {
            createProductResponse = {
                data,
                status
            };
            dispatch(getAll())
        }
        return createProductResponse;
    } catch (error) {
        let title = ''
        if (error.response && error.response.status === 401) {
            title = 'You must login first to vote!'
        }
        if (error.response && error.response.status === 400) {
            title = error.response.data.message
        }
        snackBarUpdate({
            payload: {
                message: title,
                status: true,
                type: 'error',
            },
        })(dispatch);
        return error;
    }
};