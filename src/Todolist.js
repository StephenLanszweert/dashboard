import React, { Component } from 'react';
import './Todolist.scss';
import db from './db/db';

export default class Todolist extends Component {

    constructor(props) {
        super(props);

        this.state = {}

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
            const todos = Object.values(this.state.todos).map(({ id, name, done }) => {
                return (
                    <div key={id} className={done ? "done" : "notdone"}>{name}</div>
                )
            });
            return (
                <div className='todolist'>
                    <h2>TodoList</h2>
                    <div className='todos'>
                        {todos}
                    </div>

                    <form onSubmit={e => this.addTodo(e)}>
                        <input name="todo" type="text" placeholder="New Todo" />
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
}
