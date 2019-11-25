import React, { Component } from 'react';
import './App.scss';
import Todolist from './components/Todolist';
import Clock from './components/Clock';

import db from "./db/db"
import Greeting from './components/Greeting';

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

        this.state = {
            personal: null
        }
    }

    async componentDidMount() {
        this.personalDb = await db.personal();
        this.setState({
            personal: await this.personalDb.getPersonal()
        });
    }

    render() {
        return (
            <div className='App'>
                <i ref={this.setTriggerRef} className='material-icons settings'>
                    settings_applications
                </i>
                <div className='blur'></div>
                <Greeting
                    personal={this.state.personal}
                />
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
                        <form onSubmit={async e => {

                            e.preventDefault();
                            if (this.personalDb) {
                                const personal = await this.personalDb.updatePersonal({
                                    name: e.target.name.value
                                });

                                this.setState({ personal });

                                this.toggleModal();
                            }

                        }}>
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Your Name" />
                            <button>Set Name</button>
                        </form>
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
