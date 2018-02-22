import types from 'actions/todos/types';
import { List, fromJS, is } from 'immutable';

const initialState = List([]);

export default (state = initialState, action) => {

    switch (action.type) {

        case types.FETCH_TODOS_SUCCESS: {
            const newState = fromJS(action.payload.result);
            const result = is(state, newState) ? state : newState;

            return result;
        }

        case types.CREATE_TODO_SUCCESS:
            return state.unshift(action.payload.result);

        case types.COMPLETE_SUCCESS:
            return state;

        case types.CHANGE_PRIORITY_SUCCESS:
            return state;

        case types.DELETE_TODO_SUCCESS:
            return state.filter((id) => id !== action.payload);

        default:
            return state;
    }

};
