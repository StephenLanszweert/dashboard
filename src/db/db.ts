import localForage from 'localforage';

export type Todo = {
	id: number,
	done: boolean,
	name: string,
	dueDate?: Date
}

export type PersonConfig = {
	name: string,
	backgroundImg: string
}

export type WidgetDb<T> = {
	get: () => Promise<T>,
	update: (t: T) => Promise<any>
}

export default {
	async getWidgetDb<T>(id: string, def: T): Promise<WidgetDb<T>> {
		const data = await localForage.getItem(id);

		if (data === null)
			await localForage.setItem(id, def);

		return {
			get() {
				return localForage.getItem(id)
			},
			update(t: T) {
				return localForage.setItem(id, t);
			}
		}
	},
	async personal() {
		if ((await localForage.getItem('personal')) === null)
			await localForage.setItem('personal', {});

		return {
			async getPersonal(): Promise<PersonConfig> {
				return localForage.getItem('personal');
			},
			async updatePersonal(newPersonal: any): Promise<PersonConfig> {
				console.log(newPersonal);

				const personal = await this.getPersonal();

				if (newPersonal.name)
					personal.name = newPersonal.name;

				return localForage.setItem('personal', personal);
			},
			async setPersonal(personal: PersonConfig) {
				return localForage.setItem('personal', personal);
			}
		}
	},
	async todos() {
		if ((await localForage.getItem('todos')) === null) {
			await localForage.setItem('todos', {});
			await localForage.setItem('todosIndex', 0);
		}

		async function nextId() {
			const id = await localForage.getItem("todosIndex") as number;
			await localForage.setItem("todosIndex", id + 1);

			return id;
		}

		return {
			getTodos(): Promise<{ [key: number]: Todo }> {
				return localForage.getItem("todos");
			},
			async addTodo(todo: Todo) {
				todo.id = await nextId();

				const todos = await this.getTodos();
				todos[todo.id] = todo;

				return localForage.setItem("todos", todos);
			},
			async toggleTodo(id: number) {
				const todos = await this.getTodos();
				const todo = todos[id]
				todo.done = !todo.done;
				todos[id] = todo;

				return localForage.setItem("todos", todos);
			},
			async removeTodo(id: number) {
				const todos = await this.getTodos();
				delete todos[id];

				return localForage.setItem("todos", todos);
			}
		}
	}
}
