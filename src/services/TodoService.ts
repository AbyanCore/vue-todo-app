import type { ModelTodo } from "@/types/ModelTodo";

class TodoService{
    static saveTodos(Todos: Array<ModelTodo>): void {
        localStorage.setItem("todos",JSON.stringify(Todos))
    }

    static loadTodos(): Array<ModelTodo> {
        return JSON.parse(localStorage.getItem("todos")!) as Array<ModelTodo>
    }
}

export default TodoService;