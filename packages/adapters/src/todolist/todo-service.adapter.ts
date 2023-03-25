import axios from "axios";
import type { ITodoService, Todo } from "@jessyv96/core";
import { type TodoFromAPI } from "./mappers/TodoFromAPI";

export const todoListService = (): ITodoService => {
    const fetchTodos = async (): Promise<Todo[]> => {
        const resp = await axios.get("https://dummyjson.com/todos?limit=10")
        const todos: TodoFromAPI[] = resp.data.todos

        return todos.map<Todo>(todoFromAPI => {
            return {
                id: `${todoFromAPI.id}`,
                title: todoFromAPI.todo,
                isDone: todoFromAPI.completed,
            }
        })
    }

    return {
        fetchTodos
    }
}