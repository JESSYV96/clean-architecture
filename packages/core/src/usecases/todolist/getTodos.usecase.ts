import { Todo, } from "../../domain/models/Todo.model";
import { ITodoService } from "../../domain/ports/server-side/services/todo-service.port";

export async function getTodos(todoService: ITodoService): Promise<Todo[]> {
    return todoService.fetchTodos()
}