<script setup lang="ts">
import type { ModelTodo } from '@/types/ModelTodo';
import { ref, type PropType, type Ref } from 'vue';

    const props = defineProps({
        TodoData: {
            type: Object as PropType<ModelTodo>,
            required: true
        },
        OnDelete: {
            type: Function as PropType<(uuid: string) => void>,
            required: true
        },
        OnChecked: {
            type: Function as PropType<(uuid: string,data: boolean) => void>,
            required: true
        }
    })

    const checked: Ref<boolean> = ref(props.TodoData.checked);
</script>

<template>
  <div class="bg-gray-100 border-2 border-gray-800 p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h1 class="text-2xl font-bold mb-2 font-mono text-gray-800">
      {{ props.TodoData.title }}
    </h1>
    <p class="mb-4 font-mono text-gray-700">
      {{ props.TodoData.description }}
    </p>
    <div class="flex items-center justify-between">
      <label class="inline-flex items-center cursor-pointer">
        <input 
        v-on:change="OnChecked(props.TodoData.uuid,checked)"
        v-model="checked" 
          type="checkbox" 
          :checked="checked"
          class="form-checkbox h-5 w-5 text-gray-800 rounded-sm border-2 border-gray-800 focus:ring-0 focus:ring-offset-0"
        />
        <span class="ml-2 font-mono text-gray-800">Complete</span>
      </label>
      <button 
        @click="props.OnDelete(props.TodoData.uuid)"
        class="px-4 py-2 bg-gray-800 text-white font-mono rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-colors duration-300"
      >
        Delete
      </button>
    </div>
  </div>
</template>