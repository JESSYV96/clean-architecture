import axios from "axios"
import { Todo } from "../../../domain/models/Todo.model"
import { ITodoService } from "../../../domain/ports/services/todo-service.port"
import { mapToModel, TodoFromAPI } from "../mappers/TodoFromAPI"

export const TodoService = (): ITodoService => {
    const fetchTodos = async (): Promise<Todo[]> => {
        const { data: todos } = await axios.get<TodoFromAPI[]>('https://jsonplaceholder.typicode.com/users/1/todos')

        return mapToModel(todos)
    }
    return {
        fetchTodos
    }
}