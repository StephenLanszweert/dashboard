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

        return {
            getTodos(): Promise<{ [key: number]: Todo }> {
                return <any>localForage.getItem('todos');
            },
            async addTodo(todo: Todo) {
                todo.id = await localForage.getItem('todosIndex');
                await localForage.setItem('todosIndex', todo.id + 1);

                const todos = await this.getTodos();
                todos[todo.id] = todo;

                return localForage.setItem('todos', todos);
            }
        };
    }
};
