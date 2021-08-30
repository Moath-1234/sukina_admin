import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebarShow',
    initialState: 'responsive',

    reducers: { sidebarActivation: (sidebarShow, { payload }) => payload },
});

export const { sidebarActivation } = sidebarSlice.actions;

export default sidebarSlice.reducer;
