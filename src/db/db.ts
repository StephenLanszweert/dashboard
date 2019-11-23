import localForage from 'localforage';

export type Todo = {
    id: number;
    done: boolean;
    name: string;
};

export default {
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
			async updateTodo(todo: Todo) {
				const todos = await this.getTodos();
				todos[todo.id] = todo;

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
