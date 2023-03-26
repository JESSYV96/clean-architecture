export type Todo = {
    id: number
    title: string
    isDone: boolean
}

export type TodoRequest = Omit<Todo, "id" | "isDone">

export const getTodosfilteredByDone = (todoList: Todo[]): Todo[] => {
    return todoList.filter(todo => todo.isDone)
}