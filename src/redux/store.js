// store.js

import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import projectReducer from './projectSlice'
import uploadReducer from './uploadSlice';
import editModeReducer from './editModeSlice';
import projectIdReducer from './projectIdSlice';
import linkIdReducer from './linkIdSlice';


const store = configureStore({
  reducer: {
    modal: modalReducer,
    project: projectReducer,
    uploads: uploadReducer,
    editMode: editModeReducer,
    projectId:projectIdReducer,
    linkId:linkIdReducer

  },
})

export default store
