import { createSelector } from 'reselect';

const getTodosIdsFromState = (state) => state.todos.result;
const getTodosMapFromState = (state) => state.todos.entities;

export const getTodos = createSelector(
    getTodosIdsFromState,
    getTodosMapFromState,
    (todosIds, todos) => {
        const result = todosIds.map((id) => todos.get(id)).toJS();

        return result;
    }
);
