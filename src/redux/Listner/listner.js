import { FETCH_ITEM_SUCCESS, FETCH_PEOPLE_FINISHED } from '../Action/peopleAction';
import { LOADING_MANAGE } from '../Action/loadingAction';
import axios from 'axios';

export function manageLoading(bool) {
    return {
        type: LOADING_MANAGE,
        isLoading: bool
    };
}

export function isDataFetchSuccess(items) {
    return {
        type: FETCH_ITEM_SUCCESS,
        items
    };
}

export function isDataFetchError(items) {
    return {
        type: FETCH_PEOPLE_FINISHED,
        items
    };
}

export function fetchPeople() {
    return (dispatch) => {
        dispatch(manageLoading(true));

        axios.get('http://api.tvmaze.com/shows')
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(manageLoading(false));
                return response;
            })
            .then((response) => dispatch(isDataFetchSuccess(response.data)))
            .catch(() => dispatch(isDataFetchError(true)));
    };
};
