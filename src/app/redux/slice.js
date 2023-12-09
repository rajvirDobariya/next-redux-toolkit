const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: []
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
        },
        deleteUser: (state, action) => {
            const userIdToRemove = action.payload;
            state.users = state.users.filter(user => user.id !== userIdToRemove);
            console.log(action);
        }
    }
})

export const { addUser, deleteUser } = Slice.actions;
export default Slice.reducer;
