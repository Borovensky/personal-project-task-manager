import { call, put } from 'redux-saga/effects';

import todosActions from 'actions/todos';
import { api, token } from 'instruments/api';
import { normalize } from 'normalizr';
import { todos } from 'schemas';

export function* createTodoWorker ({ payload }) {

    try {

        const response = yield call(fetch, `${api}`, {
            method:  'POST',
            headers: {
                'Authorization': token,
                'Content-Type':  'application/json',
            },
            body: JSON.stringify({ message: payload }),
        });

        const { data: denormalizedTodo, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        const normalizeTodos = normalize(denormalizedTodo, todos);

        yield put(todosActions.createTodoSuccess(normalizeTodos));

    } catch (error) {
        yield put(todosActions.createTodoFail(error));
    } finally {
        
    }

}