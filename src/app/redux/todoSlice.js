const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
};

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            };
            state.todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleTodo: (state, action) => {
            const toggledTodoId = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === toggledTodoId ? { ...todo, completed: !todo.completed } : todo
            );
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        deleteTodo: (state, action) => {
            const todoIdToDelete = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== todoIdToDelete);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        clearCompleted: state => {
            state.todos = state.todos.filter(todo => !todo.completed);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
