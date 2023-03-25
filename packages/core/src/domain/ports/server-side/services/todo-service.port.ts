import { Todo } from "../../../models/Todo.model";

export interface ITodoService {
    fetchTodos: () => Promise<Todo[]>
}