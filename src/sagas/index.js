import { all } from 'redux-saga/effects';

import todos from './todos';

export function* saga () {
    yield all([

        todos.fetchTodosWatcher(),
        todos.createTodoWatcher(),
        todos.completeTodoWatcher(),
        todos.completeAllTodosWatcher(),
        todos.changePriorityWatcher(),
        todos.deleteTodoWatcher()

    ]);
}