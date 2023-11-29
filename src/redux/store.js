// store.js

import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import projectReducer from './projectSlice'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    project: projectReducer,
  },
})

export default store
