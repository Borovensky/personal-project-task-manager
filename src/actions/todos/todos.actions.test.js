import actions from './';

const id = '5a8f22e9894aa60001658bf4';

const todo = {
    id:        '5a8f22e9894aa60001658bf4',
    message:   'And one more',
    completed: false,
    favorite:  false,
    created:   '2018-02-22T20:07:05.039Z',
    modified:  '2018-02-22T20:35:04.898Z',
};

const error = {
    message: 'An error occured',
};

const text = 'simple todo text';

describe('Todos actions', () => {

    // FetchTodos
    test('fetchTodos', () => {
        expect(actions.fetchTodos(todo)).toEqual({
            type:    'FETCH_TODOS',
            payload: todo,
        });
    });
    test('fetchTodosSuccess', () => {
        expect(actions.fetchTodosSuccess(todo)).toEqual({
            type:    'FETCH_TODOS_SUCCESS',
            payload: todo,
        });
    });
    test('fetchTodosFail', () => {
        expect(actions.fetchTodosFail(error)).toEqual({
            type:    'FETCH_TODOS_FAIL',
            payload: error.message,
            error:   true,
        });
    });

    // Create todo
    test('createTodo', () => {
        expect(actions.createTodo(text)).toEqual({
            type:    'CREATE_TODO',
            payload: text,
        });
    });
    test('createTodoSuccess', () => {
        expect(actions.createTodoSuccess(todo)).toEqual({
            type:    'CREATE_TODO_SUCCESS',
            payload: todo,
        });
    });
    test('createTodoFail', () => {
        expect(actions.createTodoFail(error)).toEqual({
            type:    'CREATE_TODO_FAIL',
            payload: error,
            error:   true,
        });
    });

    // Complete Todo
    test('completeTodo', () => {
        expect(actions.completeTodo(todo)).toEqual({
            type:    'COMPLETE',
            payload: todo,
        });
    });
    test('completeTodoSuccess', () => {
        expect(actions.completeTodoSuccess(todo)).toEqual({
            type:    'COMPLETE_SUCCESS',
            payload: todo,
        });
    });
    test('completeTodoFail', () => {
        expect(actions.completeTodoFail(error)).toEqual({
            type:    'COMPLETE_FAIL',
            payload: error,
            error:   true,
        });
    });

    // Complete All Todos
    test('completeAllTodos', () => {
        expect(actions.completeAllTodos()).toEqual({
            type: 'COMPLETE_ALL_TODOS',
        });
    });

    // Change priority
    test('changePriority', () => {
        expect(actions.changePriority(todo)).toEqual({
            type:    'CHANGE_PRIORITY',
            payload: todo,
        });
    });
    test('changePrioritySuccess', () => {
        expect(actions.changePrioritySuccess(todo)).toEqual({
            type:    'CHANGE_PRIORITY_SUCCESS',
            payload: todo,
        });
    });
    test('changePriorityFail', () => {
        expect(actions.changePriorityFail(error)).toEqual({
            type:    'CHANGE_PRIORITY_FAIL',
            payload: error,
            error:   true,
        });
    });

    // Delete todo
    test('deleteTodo', () => {
        expect(actions.deleteTodo(id)).toEqual({
            type:    'DELETE_TODO',
            payload: id,
        });
    });
    test('deleteTodoSuccess', () => {
        expect(actions.deleteTodoSuccess(todo)).toEqual({
            type:    'DELETE_TODO_SUCCESS',
            payload: todo,
        });
    });
    test('deleteTodoFail', () => {
        expect(actions.deleteTodoFail(error)).toEqual({
            type:    'DELETE_TODO_FAIL',
            payload: error,
            error:   true,
        });
    });

});
