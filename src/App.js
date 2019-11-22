import React from 'react';
import './App.scss';
import Todolist from './Todolist';
import Clock from './Clock';

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
                    <Clock></Clock>
                </div>
                <div>
                    <h2>Test</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
