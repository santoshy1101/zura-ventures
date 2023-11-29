// projectSlice.js

import { createSlice } from '@reduxjs/toolkit'

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectNames: [],
  },
  reducers: {
    addProjectName: (state, action) => {
      state.projectNames.push(action.payload)
    },
    clearProjectNames: (state) => {
      state.projectNames = []
    },
  },
})

export const { addProjectName, clearProjectNames } = projectSlice.actions
export const selectProjectNames = (state) => state.project.projectNames
export default projectSlice.reducer
