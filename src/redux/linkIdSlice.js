// linkIdSlice.js

import { createSlice } from '@reduxjs/toolkit';

const linkIdSlice = createSlice({
  name: 'linkId',
  initialState: {
    linkId: localStorage.getItem('linkId') || null,
  },
  reducers: {
    setLinkId: (state, action) => {
      state.linkId = action.payload;
      localStorage.setItem('linkId', action.payload);
    },
    clearLinkId: (state) => {
      state.linkId = null;
      localStorage.removeItem('linkId');
    },
  },
});

export const { setLinkId, clearLinkId } = linkIdSlice.actions;
export const selectLinkId = (state) => state.linkId.linkId;
export default linkIdSlice.reducer;
