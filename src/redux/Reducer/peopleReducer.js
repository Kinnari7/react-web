import { FETCH_ITEM_SUCCESS } from '../Action/peopleAction'

const peopleReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ITEM_SUCCESS:
            return action.items;
        default:
            return state;
    }
}

export default peopleReducer;