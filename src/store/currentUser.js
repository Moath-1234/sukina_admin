import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'currentUser',
    initialState: {},

    reducers: {
        setCurrentUser: (currentUser, { payload }) => {
            Object.assign(currentUser, payload);
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
