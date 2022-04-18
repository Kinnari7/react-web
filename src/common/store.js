import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import peopleReducer from '../redux/Reducer/peopleReducer';
import loadingReducer from '../redux/Reducer/loadingReducer';

const reducers = combineReducers({
    items: peopleReducer,
    isLoading: loadingReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

export default store;
