import types from 'actions/todos/types';
import { Map, fromJS, is } from 'immutable';

const initialState = Map({});

export default (state = initialState, action) => {

    switch (action.type) {

        case types.FETCH_TODOS_SUCCESS: {
            const newState = fromJS(action.payload.entities.todo);
            const result = is(state, newState) ? state : newState;

            return result;
        }

        case types.CREATE_TODO_SUCCESS:
            return state.set(action.payload.result, fromJS(action.payload.entities.todo[action.payload.result]));

        case types.COMPLETE_SUCCESS:
            return state.map((todo) => fromJS(action.payload.entities.todo[todo.get('id')]) || todo);

        case types.CHANGE_PRIORITY_SUCCESS:
            return state.map((todo) => fromJS(action.payload.entities.todo[todo.get('id')]) || todo);

        case types.DELETE_TODO_SUCCESS:
            return state.delete(action.payload);

        default:
            return state;
    }

};
