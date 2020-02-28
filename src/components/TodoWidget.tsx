import React from "react";
import Widget from "./Widget";

type Props = {
}

type State = {
	todos: Todos
}

type Todo = {
	id: number,
	isDone: boolean,
	name: string,
	dueDate?: Date
}

type Todos = { [id: number]: Todo };


export default class TodoWidget extends Widget<Props, State, Todos> {
	constructor(props: Props) {
		const initialState = {
			todos: {}
		}

		super("todos:v0.1", props, initialState, []);
	}

	onReloadData() {
		if (this.state.data === undefined)
			throw new Error("Got an undefined todos object from db");

		this.setState({
			widgetState: {
				todos: this.state.data
			}
		})
	}

	render() {
		const todos = Object.values(this
			.state
			.widgetState
			.todos)
			.map(({ id, isDone, name }) => (
				<div key={id}>
					<div className={isDone ? 'done' : 'notdone'}>
						{this.decideDoneIcon(isDone)}
						<span>{name}</span>
					</div>
					<div className='btns'>
						{this.decideTodoIcon(id, isDone)}
						<i
							className='material-icons'
						// onClick={e => this.deleteTodo(id)}
						>delete</i>
					</div>
				</div>
			));

		return (
			<div>
				{todos}
			</div>
		);
	}

	decideDoneIcon(isDone: boolean) {
		const iconName = isDone ? 'check_circle_outline' : 'cancel';
		return <i className='material-icons'>{iconName}</i>;
	}

	decideTodoIcon(id: any, done: any) {
		return (
			// <i onClick={e => this.toggleTodo(id)} className='material-icons'>
			<i className='material-icons'>
				{done ? 'cancel' : 'check'}
			</i>
		);
	}
}

//     render() {
//         if (this.state.todos) {
//             const todos = Object.values(this.state.todos).map(
//                 ({ id, name, done }: any) => (
//                     <div key={id}>
//                         <div className={done ? 'done' : 'notdone'}>
//                             {this.decideDoneIcon(done)}
//                             <span>{name}</span>
//                         </div>
//                         <div className='btns'>
//                             {this.decideTodoIcon(id, done)}
//                             <i
//                                 className='material-icons'
//                                 onClick={e => this.deleteTodo(id)}
//                             >
//                                 delete
//                             </i>
//                         </div>
//                     </div>
//                 )
//             );
//             return (
//                 <div className='todolist'>
//                     <h2>TodoList</h2>
//                     <form onSubmit={e => this.addTodo(e)}>
//                         {/* <input
//                             name='date'
//                             type='date'
//                             placeholder='New Todo'
//                         /> */}
//                         <input
//                             name='todo'
//                             type='text'
//                             value={this.state.newTodo}
//                             onChange={this.handleTodoChange}
//                             placeholder='New Todo'
//                         />
//                         <button className='addTodoButton'>
//                             <i className='material-icons'>
//                                 check_circle_outline
//                             </i>
//                         </button>
//                     </form>
//                     <div className='todos'>
//                         {this.checkForZeroTodos()}
//                         {todos}
//                     </div>
//                 </div>
//             );
//         } else {
//             return (
//                 <div className='todolist'>
//                     <span>TODO loading icon</span>
//                 </div>
//             );
//         }
//     }
