// uploadSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_APP_API;

const uploadSlice = createSlice({
  name: 'uploads',
  initialState: {
    uploadedItems: [],
    singleLink: null,
  },
  reducers: {
    addUpload: (state, action) => {
      const { name, link, timestamp } = action.payload;
      state.uploadedItems.push({ name, link, timestamp });
    },
    setUploads: (state, action) => {
      state.uploadedItems = action.payload;
    },
    setSingleLink: (state, action) => {
      state.singleLink = action.payload;
    },
    clearSingleLink: (state) => {
      state.singleLink = null;
    },
    clearUploads: (state) => {
      state.uploadedItems = [];
    },
  },
});

export const {
  addUpload,
  setUploads,
  setSingleLink,
  clearSingleLink,
  clearUploads,
} = uploadSlice.actions;
export const selectUploadedItems = (state) => state.uploads.uploadedItems;
export const selectSingleLink = (state) => state.uploads.singleLink;
export default uploadSlice.reducer;

// Action creator to get uploaded links based on ID
export const getUploadedLinksById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/project/${id}`);
    dispatch(setUploads(data));
  } catch (err) {
    console.error(`Error fetching uploaded links with ID ${id}:`, err);
  }
};

// Action creator to get a single link by ID
export const getSingleLinkById = (projectId, linkId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/project/${projectId}/links/${linkId}`);
    dispatch(setSingleLink(data));
  } catch (err) {
    console.error(`Error fetching single link with ID ${linkId}:`, err);
  }
};

// Action creator to update a single link within a project by link ID
export const updateSingleLinkById = (projectId, linkId, updatedLinkData) => async (dispatch) => {
  try {
    const response = await axios.patch(`${BASE_URL}/project/${projectId}/links/${linkId}`, updatedLinkData);
    
    if (response.status === 200) {
      dispatch(setSingleLink(response.data));
    } else {
      console.error('Error updating single link:', response.statusText);
    }
  } catch (err) {
    console.error(`Error updating single link with ID ${linkId}:`, err);
  }
};

// Action creator to delete a single link within a project by link ID
export const deleteSingleLinkById = (projectId,linkId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${BASE_URL}/project/${projectId}/links/${linkId}`);
    console.log('del', response,projectId,linkId)
    if (response.status === 200) {
      console.log('Successfully deleted single link');
      dispatch(clearSingleLink());
      dispatch(getUploadedLinksById(projectId)); // Optionally refresh the list of links
    } else {
      console.error('Error deleting single link:', response.statusText);
    }
  } catch (err) {
    console.error(`Error deleting single link with ID ${linkId}:`, err);
  }
};

// Action creator to post a new link
export const postLink = (linkData) => async (dispatch) => {
  const projectId = localStorage.getItem("projectId");
  try {
    await axios.post(`${BASE_URL}/project/${projectId}/links`, linkData);
    dispatch(getUploadedLinksById(projectId));
  } catch (err) {
    console.error('Error posting link:', err);
  }
};
