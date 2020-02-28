import React from "react";
import Widget from "./Widget";

type Props = {
}

type State = {
	todos: Todo[]
}

type Todo = {
	id: number,
	done: boolean,
	name: string,
	dueDate?: Date
}


export default class TodoWidget extends Widget<Props, State, Todo[]> {
	constructor(props: Props) {
		const initialState = {
			todos: []
		}

		super("todos:v0.1", props, initialState, []);
	}

	render() {
		const todos = this
			.state
			.widgetState
			.todos
			.map(todo => <div></div>)
		return (
			<div>
				{todos}
			</div>
		);
	}
}


// export default class Todolist extends React.Component<any, any> {
//     todoDb: any;
//     constructor(props: any) {
//         super(props);

//         this.state = {
//             todos: [],
//             newTodo: ''
//         };
//     }

//     async componentDidMount() {
//         this.todoDb = await db.todos();
//         this.loadData();
//     }

//     // DATA

//     async deleteTodo(id: any) {
//         await this.todoDb.removeTodo(id);
//         this.loadData();
//     }

//     async toggleTodo(id: any) {
//         await this.todoDb.toggleTodo(id);
//         this.loadData();
//     }

//     async loadData() {
//         const todos = await this.todoDb.getTodos();
//         this.setState({ todos });
//     }

//     handleTodoChange = (e: any) => {
//         this.setState({ newTodo: e.target.value });
//     };

//     async addTodo(e: any) {
//         e.preventDefault();
//         // console.log(new Date(e.target.date.value));
//         await this.todoDb.addTodo({
//             name: this.state.newTodo,
//             done: false
//         });
//         this.setState({
//             newTodo: ''
//         });
//         this.loadData();
//     }

//     // RENDER

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

//     checkForZeroTodos() {
//         if (
//             Object.entries(this.state.todos).length === 0 &&
//             this.state.todos.constructor === Object
//         ) {
//             return <p>There are currently no todos you have set</p>;
//         }
//     }

//     decideDoneIcon(done: any) {
//         return (
//             <i className='material-icons'>
//                 {done ? 'check_circle_outline' : 'cancel'}
//             </i>
//         );
//     }
//     decideTodoIcon(id: any, done: any) {
//         return (
//             <i onClick={e => this.toggleTodo(id)} className='material-icons'>
//                 {done ? 'cancel' : 'check'}
//             </i>
//         );
//     }
// }
