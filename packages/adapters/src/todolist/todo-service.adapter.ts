import axios from "axios";
import type { ITodoService, Todo, TodoRequest } from "@jessyv96/core";
import type { TodoDTO } from "./mappers/TodoDTO"

export const todoListService = (): ITodoService => {
    const fetchTodos = async (): Promise<Todo[]> => {
        const resp = await axios.get("https://dummyjson.com/todos?limit=5")
        const todos: TodoDTO[] = resp.data.todos || []

        return todos.map<Todo>(TodoDTO => {
            return {
                id: TodoDTO.id,
                title: TodoDTO.todo,
                isDone: TodoDTO.completed,
            }
        })
    }

    const createTodo = async (newTodo: TodoRequest): Promise<Todo> => {
        const { data } = await axios.post<TodoDTO>("https://dummyjson.com/todos/add", {
            todo: "Faire la vaiselle",
        })

        return {
            id: data.id,
            title: data.todo,
            isDone: data.completed,
        }
    }

    const updateTodo = async (todoId: number): Promise<Todo> => {
        const { data } = await axios.put<TodoDTO>(`https://dummyjson.com/todos/${todoId}`, {
            completed: false
        })

        return {
            id: data.id,
            title: data.todo,
            isDone: data.completed
        }
    }

    const deleteTodo = async (todoId: number): Promise<void> => {
        await axios.delete(`https://dummyjson.com/todos/${todoId}`)
    }

    return {
        fetchTodos,
        createTodo,
        updateTodo,
        deleteTodo
    }
}