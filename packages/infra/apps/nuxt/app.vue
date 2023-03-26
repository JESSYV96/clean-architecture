<script setup lang="ts">
import { getTodos, editTodo, deleteTodo, Todo } from "@jessyv96/core"
import { todoListService } from "@jessyv96/adapters"

const todoService = todoListService()
const todos: Todo[] = await getTodos(todoService)

</script>

<template>
  <main>

    <div v-for="todo in todos" :key="todo.id">{{ todo.title }}
      <div>
        Fait : <input type="checkbox" name="isTodoDone" :checked="todo.isDone" />
      </div>
      <div>
        <button @click="() => editTodo(todoService, todo.id)">Modifier</button>
        <button @click="() => deleteTodo(todoService, todo.id)">Supprimer</button>
      </div>
    </div>
  </main>
</template>
