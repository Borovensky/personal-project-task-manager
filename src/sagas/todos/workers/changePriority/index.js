import { call, put } from 'redux-saga/effects';
import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';
import { normalize } from 'normalizr';
import { todos } from 'schemas';

export function* changePriorityWorker ({ payload }) {

    try {

        const response = yield call(fetch, `${api}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  token,
            },
            body: JSON.stringify(payload),
        });

        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        const normalizeTodos = normalize(data, [todos]);

        yield put(todosActions.changePrioritySuccess(normalizeTodos));

    } catch (error) {
        yield put(todosActions.changePriorityFail(error));
    } finally {
        // finally
    }

}
