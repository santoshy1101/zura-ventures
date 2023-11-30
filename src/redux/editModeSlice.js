// editModeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const editModeSlice = createSlice({
  name: 'editMode',
  initialState: {
    isEditMode: false,
    editedItemId: null,
  },
  reducers: {
    enterEditMode: (state, action) => {
      state.isEditMode = true;
      state.editedItemId = action.payload;
    },
    exitEditMode: (state) => {
      state.isEditMode = false;
      state.editedItemId = null;
    },
  },
});

export const { enterEditMode, exitEditMode } = editModeSlice.actions;
export const selectEditMode = (state) => state.editMode.isEditMode;
export const selectEditedItemId = (state) => state.editMode.editedItemId;
export default editModeSlice.reducer;
