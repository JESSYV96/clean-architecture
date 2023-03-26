<script setup lang="ts">
import { getTodos, editTodo, deleteTodo, Todo } from "@jessyv96/core"
import { todoListService } from "@jessyv96/adapters"
import { useMutation, useQuery } from "@tanstack/vue-query"

const todoService = todoListService()

const { isLoading, error, data: todos } = useQuery({
  queryKey: ['todos', todoService],
  queryFn: async () => {
    const data = await getTodos(todoService)
    return data
  },
})

const editTodoMutation = useMutation({
  mutationFn: (todoId: number) => {
    return editTodo(todoService, todoId)
  },
})

const deleteTodoMutation = useMutation({
  mutationFn: (todoId: number) => {
    return deleteTodo(todoService, todoId)
  },
})


</script>

<template>
  <main>
    <h2>Nuxt</h2>
    <div v-for="todo in todos" :key="todo.id">{{ todo.title }}
      <div>
        Fait : <input type="checkbox" name="isTodoDone" :checked="todo.isDone" />
      </div>
      <div>
        <button @click="() => editTodoMutation.mutate(todo.id)">Modifier</button>
        <button @click="() => deleteTodoMutation.mutate(todo.id)">Supprimer</button>
      </div>
    </div>
  </main>
</template>
