import { LOADING_MANAGE } from '../Action/loadingAction';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case LOADING_MANAGE:
            return action.isLoading;
        default:
            return state;
    }
}

export default loadingReducer;