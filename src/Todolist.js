import React, { Component } from 'react';
import './Todolist.scss';
import { test } from './db/db';

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
        this.setState({
            todos: await test()
        });
    }

    render() {
        if (this.state.todos) {
            const todos = this.state.todos.map(({ name, done }) => (
                <div className={done ? "done" : "notdone"}>{name}</div>
            ));
            return (
                <div className='todolist'>
                    <h2>TodoList</h2>
                    <div className='todos'>

                        {todos}
                    </div>
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
