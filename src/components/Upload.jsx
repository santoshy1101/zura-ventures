import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeUpload,
  selectIsModalOpen,
  selectIsUploadOpen,
} from '../redux/modalSlice'
import {
  addUpload,
  clearUploads,
  selectUploadedItems,
} from '../redux/uploadSlice'
import { IoClose } from 'react-icons/io5'

import Youtube from '../assets/youtube.svg'

const initState = {
  name: '',
  link: '',
}
const CreateProject = () => {
  const [uploadForm, setUploadFrom] = useState(initState)
  const [valid, setValid] = useState(false)
  const isModalOpen = useSelector(selectIsUploadOpen)
  const dispatch = useDispatch()
  const uploadedItems = useSelector(selectUploadedItems)

  console.log(uploadedItems)

  const handleCloseUpload = () => {
    setValid(false)
    setUploadFrom(initState)
    dispatch(closeUpload())
  }

  const handleUploadForm = (event) => {
    event.preventDefault()
    const timestamp = new Date().toLocaleString() // Current date and time

    if (uploadForm.name && uploadForm.link) {
      dispatch(addUpload({ ...uploadForm, timestamp }))
      handleCloseUpload()
    } else {
      setValid(true)
    }
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    setUploadFrom((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
    setValid(false)
  }

  return (
    <div
      className={`fixed z-10  top-1/2 left-1/2 transform ${
        isModalOpen ? '-translate-x-[50%]' : '-translate-x-[250%]'
      } -translate-y-1/2 bg-white p-4  transition-transform ease-in-out  rounded-lg duration-1000 shadow-2xl`}
    >
      <div className="w-[550px] bg-white  ">
        <div className="flex items-start justify-between ">
          <div className="flex items-center text-2xl font-bold gap-x-3">
            <img src={Youtube} alt="youtube" />
            <p>Upload from Youtube</p>
          </div>
          <span className="cursor-pointer" onClick={handleCloseUpload}>
            <IoClose size={30} />
          </span>
        </div>

        <form
          className="flex flex-col mt-4 gap-y-2"
          onSubmit={handleUploadForm}
        >
          <label htmlFor="name">Name</label>

          <input
            name="name"
            className=" w-[100%] h-[40px] rounded-md px-3 border-slate-400 border focus:outline-slate-400 "
            id="name"
            type="text"
            value={uploadForm.name}
            onChange={changeHandler}
          />
          <label htmlFor="link">Link</label>

          <input
            name="link"
            className=" w-[100%] h-[40px] rounded-md px-3 border-slate-400 border focus:outline-slate-400 "
            id="link"
            type="text"
            value={uploadForm.link}
            onChange={changeHandler}
          />
          {valid && (
            <p className="text-xs font-medium text-red-500">
              Upload Name Or Link Can't be empty
            </p>
          )}

          <div className="flex justify-end mt-6 font-semibold gap-x-4">
            <button
              className="bg-[#211935] text-white hover:bg-[#211935d8] duration-150 cursor-pointer px-4 py-1 rounded-md"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProject
