import { call, put } from 'redux-saga/effects';

import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* deleteTodoWorker ({ payload }) {

    try {

        const response = yield call(fetch, `${api}${payload}`, {
            method:  'DELETE',
            headers: {
                Authorization: token,
            },

        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json])

            throw new Error(message);
        }

        yield put(todosActions.deleteTodoSuccess(payload));

    } catch (error) {
        yield put(todosActions.deleteTodoFail(error));
    } finally {

    }

};