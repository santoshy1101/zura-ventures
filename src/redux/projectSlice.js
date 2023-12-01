// projectSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API;

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectNames: [],
  },
  reducers: {
    setProjectNames: (state, action) => {
      state.projectNames = action.payload;
    },
    addProjectName: (state, action) => {
      state.projectNames.push(action.payload);
    },
    clearProjectNames: (state) => {
      state.projectNames = [];
    },
  },
});

export const { setProjectNames, addProjectName, clearProjectNames } = projectSlice.actions;
export const selectProjectNames = (state) => state.project.projectNames;
export default projectSlice.reducer;

// Action creator to get project names
export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/project`);
    dispatch(setProjectNames([...data]));
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};

// Action creator to post a new project name
export const postProject = (projectName) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/project`, { name: projectName });
    dispatch(addProjectName(data));
  } catch (err) {
    console.error('Error posting project:', err);
  }
};
