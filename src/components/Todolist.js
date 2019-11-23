import React, { Component } from 'react';
import './Todolist.scss';
import db from '../db/db';

export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.state.todos = null;
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const todoDb = await db.todos();
        const todos = await todoDb.getTodos();

        console.log(todos);

        this.setState({ todos });
    }

    async addTodo(e) {
        e.preventDefault();
        const newTodo = e.target.todo.value;
        const todoDb = await db.todos();

        await todoDb.addTodo({
            name: newTodo,
            done: false
        });

        this.loadData();
    }

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
                            {this.decideTodoIcon(done)}
                            <i className='material-icons'>delete</i>
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
        if (done) {
            return <i className='material-icons'>check_circle_outline</i>;
        } else {
            return <i className='material-icons'>cancel</i>;
        }
    }
    decideTodoIcon(done) {
        if (done) {
            return <i className='material-icons'>cancel</i>;
        } else {
            return <i className='material-icons'>check</i>;
        }
    }
}
