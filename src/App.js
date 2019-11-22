import React from 'react';
import './App.scss';
import Todolist from './Todolist';

function App() {
    return (
        <div className='App'>
            <div className='blur'></div>
            <h1>Good evening Stephen</h1>
            <div className='content'>
                <div>
                    <Todolist></Todolist>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
