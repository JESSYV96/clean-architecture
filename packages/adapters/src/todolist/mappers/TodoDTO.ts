export type TodoDTO = {
    id: number
    todo: string
    completed: boolean
    userId: number
}

export type TodoRequestDTO = Omit<TodoDTO, "id">
