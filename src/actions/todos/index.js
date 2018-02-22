import types from './types';

export default Object.freeze({

    // FetchTodos
    fetchTodos: (search) => ({
        type:    types.FETCH_TODOS,
        payload: search,
    }),
    fetchTodosSuccess: (todos) => ({
        type:    types.FETCH_TODOS_SUCCESS,
        payload: todos,
    }),
    fetchTodosFail: (error) => ({
        type:    types.FETCH_TODOS_FAIL,
        payload: error.message,
        error:   true,
    }),

    // Create todo
    createTodo: (text) => ({
        type:    types.CREATE_TODO,
        payload: text,
    }),
    createTodoSuccess: (todo) => ({
        type:    types.CREATE_TODO_SUCCESS,
        payload: todo,
    }),
    createTodoFail: (error) => ({
        type:    types.CREATE_TODO_FAIL,
        payload: error,
        error:   true,
    }),

    // CompleteTodo
    completeTodo: (todo) => ({
        type:    types.COMPLETE,
        payload: todo,
    }),
    completeTodoSuccess: (todo) => ({
        type:    types.COMPLETE_SUCCESS,
        payload: todo,
    }),
    completeTodoFail: (error) => ({
        type:    types.COMPLETE_FAIL,
        payload: error,
        error:   true,
    }),

    // CompleteAllTodos
    completeAllTodos: () => ({
        type: types.COMPLETE_ALL_TODOS,
    }),

    // Change priority
    changePriority: (todo) => ({
        type:    types.CHANGE_PRIORITY,
        payload: todo,
    }),
    changePrioritySuccess: (todo) => ({
        type:    types.CHANGE_PRIORITY_SUCCESS,
        payload: todo,
    }),
    changePriorityFail: (error) => ({
        type:    types.CHANGE_PRIORITY_FAIL,
        payload: error,
        error:   true,
    }),

    //Delete todo
    deleteTodo: (id) => ({
        type:    types.DELETE_TODO,
        payload: id,
    }),
    deleteTodoSuccess: (id) => ({
        type:    types.DELETE_TODO_SUCCESS,
        payload: id,
    }),
    deleteTodoFail: (error) => ({
        type:    types.DELETE_TODO_FAIL,
        payload: error,
        error:   true,
    }),

});
