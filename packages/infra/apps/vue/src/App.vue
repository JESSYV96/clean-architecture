<script setup lang="ts">
import { ref } from "vue";
import { getTodos, type Todo } from "@jessyv96/core"

const todos = ref<Todo[]>(getTodos()) 
</script>

<template>
    <div>
        <p v-for="todo in todos" :key="todo.id">{{ todo.title }}</p>
    </div>
</template>

