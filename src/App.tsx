import React from 'react';
// import './App.scss';
// import Todolist from './components/Todolist';
import Clock from './components/Clock';

import db from "./db/db"
import Greeting from './components/Greeting';
import ClockWidget from './components/ClockWidget';
import TodoWidget from './components/TodoWidget';

type Props = any;

type State = any;

export default class App extends React.Component<Props, State> {

    modal: any;
    personalDb: any;

    constructor(props: any) {
        super(props);
        this.modal = null;

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

    setTriggerRef(element: any) {
        console.log(element);
        
        element?.addEventListener('click', () => this.toggleModal());
    }
    setCloseButtonRef(element: any) {
        element?.addEventListener('click', () => this.toggleModal());
    }
    windowOnClick(event: any) {
        if (event.target === this.modal) {
            this.toggleModal();
        }
    }
    setModalRef(element: any) {
        this.modal = element;
    }
    toggleModal() {
        this.modal.classList.toggle('show-modal');
    }

    render() {
        return (
            <div className='App'>
                <h1>Yeet</h1>
                {/* <ClockWidget /> */}
                <TodoWidget />
                {/* <i ref={(e: any) => this.setTriggerRef(e)} className='material-icons settings'>
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
                <div ref={(e: any) => this.setModalRef(e)} className='modal'>
                    <div className='modal-content'>
                        <span
                            ref={(e: any) => this.setCloseButtonRef(e)}
                            className='material-icons closebutton'
                        >
                            close
                        </span>
                        <h1>Settings</h1>
                        <form onSubmit={async (e: any) => {

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
                </div> */}
            </div>
        );
    }
}