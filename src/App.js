import React, { Component } from 'react';
import './App.scss';
import Todolist from './components/Todolist';
import Clock from './components/Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.setTriggerRef = element => {
            element.addEventListener('click', this.toggleModal);
        };
        this.setCloseButtonRef = element => {
            element.addEventListener('click', this.toggleModal);
        };
        this.modal = null;
        this.setModalRef = element => {
            this.modal = element;
        };
        this.toggleModal = () => {
            this.modal.classList.toggle('show-modal');
        };
        window.addEventListener('click', this.windowOnClick);
    }
    render() {
        return (
            <div className='App'>
                <i ref={this.setTriggerRef} className='material-icons settings'>
                    settings_applications
                </i>
                <div className='blur'></div>
                <h1>Good evening Stephen</h1>
                <div>
                    <Clock></Clock>
                </div>
                <div className='content'>
                    <div>
                        <Todolist></Todolist>
                    </div>
                    <div>
                        <h2>Test</h2>
                    </div>
                </div>
                <div ref={this.setModalRef} className='modal'>
                    <div className='modal-content'>
                        <span
                            ref={this.setCloseButtonRef}
                            className='material-icons closebutton'
                        >
                            close
                        </span>
                        <h1>Settings</h1>
                    </div>
                </div>
            </div>
        );
    }

    windowOnClick(event) {
        if (event.target === this.modal) {
            this.toggleModal();
        }
    }
}
