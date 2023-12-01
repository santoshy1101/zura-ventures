// projectIdSlice.js

import { createSlice } from '@reduxjs/toolkit';

const projectIdSlice = createSlice({
  name: 'projectId',
  initialState: {
    projectId: localStorage.getItem('projectId') || null,
  },
  reducers: {
    setProjectId: (state, action) => {
      state.projectId = action.payload;
      localStorage.setItem('projectId', action.payload);
    },
    clearProjectId: (state) => {
      state.projectId = null;
      localStorage.removeItem('projectId');
    },
  },
});

export const { setProjectId, clearProjectId } = projectIdSlice.actions;
export const selectProjectId = (state) => state.projectId.projectId;
export default projectIdSlice.reducer;
