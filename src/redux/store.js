// store.js

import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import projectReducer from './projectSlice'
import uploadReducer from './uploadSlice';
import editModeReducer from './editModeSlice';


const store = configureStore({
  reducer: {
    modal: modalReducer,
    project: projectReducer,
    uploads: uploadReducer,
    editMode: editModeReducer,

  },
})

export default store
