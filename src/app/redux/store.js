const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './userSlice';
import todoReducer from './todoSlice';
export const store = configureStore({
    reducer:{
        userData:userReducer,
        todoData:todoReducer
    }
})