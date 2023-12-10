const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: JSON.parse(localStorage.getItem("users"))
}

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let usersString = JSON.stringify(state.users);
            localStorage.setItem("users",usersString);
        },
        deleteUser: (state, action) => {
            const userIdToRemove = action.payload;
            state.users = state.users.filter(user => user.id !== userIdToRemove);
            let usersString = JSON.stringify(state.users);
            localStorage.setItem("users",usersString);
        }
    }
})

export const { addUser, deleteUser } = Slice.actions;
export default Slice.reducer;
