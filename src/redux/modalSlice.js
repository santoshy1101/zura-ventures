// modalSlice.js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
  isUploadOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
    openUpload: (state) => {
      state.isUploadOpen = true
    },
    closeUpload: (state) => {
      state.isUploadOpen = false
    },
  },
})

export const { openModal, closeModal, openUpload,closeUpload } = modalSlice.actions
export const selectIsModalOpen = (state) => state.modal.isModalOpen
export const selectIsUploadOpen = (state) => state.modal.isUploadOpen
export default modalSlice.reducer
