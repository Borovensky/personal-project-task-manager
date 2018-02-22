// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, fromJS, is } from 'immutable';
// Instruments
import Styles from './styles';
import initialState from './todos';
import Checkbox from 'theme/assets/Checkbox';
import todosActions from 'actions/todos';
import { getTodos } from 'selectors/todos';
// Components
import Task from 'components/Task';

class Scheduler extends Component {

    constructor (props) {
        super(props);

        this.state = {
            newTodo: '',
            search:  '',
        };
        
        this.complete = this.complete.bind(this);
        this.changePriority = this.changePriority.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.completeAll = this.completeAll.bind(this);

    }

    componentDidMount () {
        const { search } = this.state;
        const { actions } = this.props;

        actions.fetchTodos(search);
    }

    complete (id) {
        const { todos, actions: { completeTodo }} = this.props;

        todos.map((todo) => {
            if (todo.id === id) {
                completeTodo([{
                    id,
                    message:   todo.message,
                    completed: !todo.completed,
                    favorite:  todo.favorite,
                }]);
            }
        });
    }

    changePriority (id) {
        const { todos, actions: { changePriority }} = this.props;
    
        todos.map((todo) => {
            if (todo.id === id) {
                changePriority([{
                    id,
                    message:   todo.message,
                    completed: todo.completed,
                    favorite:  !todo.favorite,
                }]);
            }
        });

    }

    deleteTodo (id) {
        const { actions: { deleteTodo }} = this.props;

        deleteTodo(id);
    }

    completeAll () {
        const { actions: { completeAllTodos }} = this.props;

        completeAllTodos();
    }
        

    handleSubmit = (event) => {
        event.preventDefault();

        const { createTodo } = this.props.actions;
        const { newTodo } = this.state;

        if (newTodo.length !== 0) {
            createTodo(newTodo);
            this.setState({ newTodo: '' });
        }
    }
        
    handleInputChange = (event) => {
        const newTodo = event.target.value || '';
        
        if (newTodo.length <= 46) {
            this.setState({ newTodo });
        }

    }

    handleSearchInputChange = (event) => {
        const search = event.target.value || '';
        
        this.setState({ search })
    }

    handleSearchInputKeyPress = (event) => {
        const { search } = this.state;
        const { actions } = this.props;

        if (event.key === 'Enter') {
            actions.fetchTodos(search);
        }
    }

    render () {
        const { todos } = this.props;
        const allCompleted = todos.every((todo) => todo.completed);
        const todoList = todos.map(({ id, message, completed, favorite }) => (
            <Task
                changePriority = { this.changePriority }
                complete = { this.complete }
                completed = { completed }
                deleteTodo = { this.deleteTodo }
                favorite = { favorite }
                id = { id }
                key = { id }
                message = { message }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input 
                            placeholder = 'Поиск'
                            type = 'search'
                            value = { this.state.search }
                            onChange = { this.handleSearchInputChange }
                            onKeyPress = { this.handleSearchInputKeyPress }
                        />
                    </header>
                    <section>
                        <form onSubmit = { this.handleSubmit }>
                            <input
                                placeholder = 'Описание моей новой задачи'
                                // ref = { (ref) => this.input = ref }
                                type = 'text'
                                value = { this.state.newTodo }
                                onChange = { this.handleInputChange }
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <ul>{todoList}</ul>
                    </section>
                    <footer>
                        <Checkbox
                            checked = { allCompleted }
                            color1 = '#363636'
                            color2 = '#fff'
                            onClick = { this.completeAll }
                        />
                        <code>Все задачи выполнены</code>
                    </footer>
                </main>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: getTodos(state),
});

const mapDispathToProps = (dispatch) => ({
    actions: bindActionCreators(
        { ...todosActions },
        dispatch),
})

export default connect(mapStateToProps, mapDispathToProps)(Scheduler);