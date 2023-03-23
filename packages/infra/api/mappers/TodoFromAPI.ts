import { Todo } from "../../../domain/models/Todo.model"

export type TodoFromAPI = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const mapToModel = (todos: TodoFromAPI[]): Todo[] => todos.map<Todo>(todo => {
    return {
        id: `${todo.id}`,
        title: todo.title,
        isDone: todo.completed
    }
})