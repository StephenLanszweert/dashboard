import React, { Component } from 'react';
import './Todolist.scss';

export default class Todolist extends Component {
    render() {
        return (
            <div className='todolist'>
                <h2>TodoList</h2>
                <div className='todos'>
                    <div className='notdone'>Doing the dishes</div>
                    <div className='done'>Clean the floor</div>
                </div>
            </div>
        );
    }
}
