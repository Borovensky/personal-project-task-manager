import { takeEvery } from 'redux-saga/effects';
import types from 'actions/todos/types';
import { fetchTodosWorker } from './workers/fetchTodos';
import { createTodoWorker } from './workers/createTodo';
import { completeTodoWorker } from './workers/completeTodo';
import { completeAllTodosWorker } from './workers/completeAllTodos';
import { changePriorityWorker } from './workers/changePriority';
import { deleteTodoWorker } from './workers/deleteTodo';

export default Object.freeze({

    * fetchTodosWatcher () {
        yield takeEvery(types.FETCH_TODOS, fetchTodosWorker);
    },

    * createTodoWatcher () {
        yield takeEvery(types.CREATE_TODO, createTodoWorker);
    },

    * completeTodoWatcher () {
        yield takeEvery(types.COMPLETE, completeTodoWorker);
    },

    * completeAllTodosWatcher () {
        yield takeEvery(types.COMPLETE_ALL_TODOS, completeAllTodosWorker);
    },

    * changePriorityWatcher () {
        yield takeEvery(types.CHANGE_PRIORITY, changePriorityWorker);
    },

    * deleteTodoWatcher () {
        yield takeEvery(types.DELETE_TODO, deleteTodoWorker);
    },

});
