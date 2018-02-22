import { call, put } from 'redux-saga/effects';
import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';
import { normalize } from 'normalizr';
import { todos } from 'schemas';

export function* fetchTodosWorker ({ payload }) {

    try {

        const isSeatch = payload ? `?search=${payload}` : '';

        const response = yield call(fetch, `${api}${isSeatch}`, {
            method:  'GET',
            headers: {
                Authorization: token,
            },
        });

        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        const normalizeTodos = normalize(data, [todos]);

        yield put(todosActions.fetchTodosSuccess(normalizeTodos));

    } catch (error) {
        yield put(todosActions.fetchTodosFail(error));
    } finally {
        // finally
    }

}
