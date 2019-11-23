import React, { Component } from 'react';
import './Todolist.scss';
import db from '../db/db';

export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.state.todos = null;
    }

    async componentDidMount() {
        this.todoDb = await db.todos();
        this.loadData();
    }

    // DATA

    async deleteTodo(id) {
        await this.todoDb.removeTodo(id);
        this.loadData();
    }

    async toggleTodo(id) {
        await this.todoDb.toggleTodo(id);
        this.loadData();
    }

    async loadData() {
        const todos = await this.todoDb.getTodos();

        this.setState({ todos });
    }

    async addTodo(e) {
        e.preventDefault();
        const newTodo = e.target.todo.value;

        await this.todoDb.addTodo({
            name: newTodo,
            done: false
        });

        this.loadData();
    }

    // RENDER

    render() {
        if (this.state.todos) {
            console.log(this.state.todos);
            const todos = Object.values(this.state.todos).map(
                ({ id, name, done }) => (
                    <div key={id}>
                        <div className={done ? 'done' : 'notdone'}>
                            {this.decideDoneIcon(done)}
                            <span>{name}</span>
                        </div>
                        <div className='btns'>
                            {this.decideTodoIcon(id, done)}
                            <i
                                className='material-icons'
                                onClick={e => this.deleteTodo(id)}
                            >
                                delete
                            </i>
                        </div>
                    </div>
                )
            );
            return (
                <div className='todolist'>
                    <h2>TodoList</h2>
                    <div className='todos'>{todos}</div>

                    <form onSubmit={e => this.addTodo(e)}>
                        <input name='todo' type='text' placeholder='New Todo' />
                        <button>Add</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div className='todolist'>
                    <span>TODO loading icon</span>
                </div>
            );
        }
    }

    decideDoneIcon(done) {
        return <i className='material-icons'>{done ? "check_circle_outline" : "cancel"}</i>;
    }
    decideTodoIcon(id, done) {
        return <i onClick={e => this.toggleTodo(id)} className='material-icons'>{done ? "cancel" : "check"}</i>;
    }
}
