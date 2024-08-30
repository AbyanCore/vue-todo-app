<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { ModelTodo } from './types/ModelTodo';
import TodoComponent from "./components/TodoComponent.vue"
import RetroBackground from './components/RetroBackground.vue';
import TodoService from './services/TodoService';
  const Todos: Ref<Array<ModelTodo>> = ref(TodoService.loadTodos() ?? [])
  const NewTodo: Ref<ModelTodo> = ref({
    uuid: crypto.randomUUID(),
    title: "",
    description: "",
    checked: false
  } as ModelTodo);

  const AddTodoHandler = (): void => {
    Todos.value.push(NewTodo.value);

    NewTodo.value = {
      uuid: crypto.randomUUID(),
      title: "",
      description: "",
      checked: false
    } as ModelTodo

    TodoService.saveTodos(Todos.value)
  }

  const TodoOnDelete = (uuid: string): void => {
    Todos.value = Todos.value.filter(v => v.uuid != uuid)

    TodoService.saveTodos(Todos.value)
  }
  
  const CheckedTodoHandler = (uuid: string,data: boolean): void => {
    Todos.value.map(v => {
      if (v.uuid == uuid) v.checked = data
    })

    TodoService.saveTodos(Todos.value)
  }

</script>

<template>
  <RetroBackground/>
  <div class="container mx-auto px-4 py-8 max-w-md">
    <h1 class="font-mono font-bold text-3xl mb-6 text-gray-800 text-center">Simple Vue Todo App</h1>
    
    <form @submit.prevent="AddTodoHandler" class="mb-8 bg-gray-100 p-6 border-2 border-gray-800 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="title" class="block font-mono font-bold mb-2 text-gray-800">Title</label>
        <input 
          id="title"
          type="text"
          placeholder="Enter title"
          v-model="NewTodo.title"
          class="w-full px-3 py-2 border-2 border-gray-800 rounded font-mono focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block font-mono font-bold mb-2 text-gray-800">Description</label>
        <textarea 
          id="description"
          placeholder="Enter description"
          v-model="NewTodo.description"
          class="w-full px-3 py-2 border-2 border-gray-800 rounded font-mono focus:outline-none focus:ring-2 focus:ring-gray-600 h-24 resize-none"
        ></textarea>
      </div>
      <button 
        type="submit"
        class="w-full bg-gray-800 text-white font-mono py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-colors duration-300"
      >
        Add Todo
      </button>
    </form>

    <div class="space-y-4">
      <TodoComponent 
        v-for="(item, index) in Todos" 
        :key="item.uuid || index" 
        :TodoData="item" 
        :OnDelete="TodoOnDelete"
        :OnChecked="CheckedTodoHandler"
      />
    </div>
  </div>
</template>