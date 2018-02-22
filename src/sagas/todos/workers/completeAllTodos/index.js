import { call, put, select } from 'redux-saga/effects';
import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';
import { normalize } from 'normalizr';
import { todos } from 'schemas';

export function* completeAllTodosWorker () {

    try {

        const getAllTodos = yield select(
            (store) => store.todos.result.map(
                (todo) => store.todos.entities.get(todo).toJS()
            )
        );

        const allCompleted = getAllTodos.every((todo) => todo.completed);

        const toggleAll = getAllTodos.map((todo) => ({ ...todo, completed: !allCompleted }));

        const response = yield call(fetch, `${api}`, {
            method:  'PUT',
            headers: {
                'Authorization': token,
                'Content-Type':  'application/json',
            },
            body: JSON.stringify(toggleAll),
        });

        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        const normalizeTodos = normalize(data, [todos]);

        yield put(todosActions.completeTodoSuccess(normalizeTodos));

    } catch (error) {
        yield put(todosActions.completeTodoFail(error));
    } finally {
        // finally
    }

}
