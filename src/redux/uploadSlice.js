// uploadSlice.js

import { createSlice } from '@reduxjs/toolkit';

const uploadSlice = createSlice({
  name: 'uploads',
  initialState: {
    uploadedItems: [],
  },
  reducers: {
    addUpload: (state, action) => {
      const { name, link, timestamp } = action.payload;
      state.uploadedItems.push({ name, link, timestamp });
    },
    clearUploads: (state) => {
      state.uploadedItems = {};
    },
  },
});

export const { addUpload, clearUploads } = uploadSlice.actions;
export const selectUploadedItems = (state) => state.uploads.uploadedItems;
export default uploadSlice.reducer;
