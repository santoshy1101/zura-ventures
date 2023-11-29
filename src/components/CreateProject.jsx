import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, selectIsModalOpen } from '../redux/modalSlice'
import { addProjectName } from '../redux/projectSlice'

const CreateProject = () => {
  const [projectName, setProjectName] = useState('')
  const [valid, setValid] = useState(false)
  const isModalOpen = useSelector(selectIsModalOpen)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    setValid(false)
    dispatch(closeModal())
  }
  const handleAddProjectName = (event) => {
    event.preventDefault()
    if (projectName) {
      dispatch(addProjectName(projectName))
      setProjectName('')
      dispatch(closeModal())
      setValid(false)
    } else {
      setValid(true)
    }
  }

  return (
    <div
      className={`fixed  top-1/2 left-1/2 transform ${
        isModalOpen ? '-translate-x-[50%]' : '-translate-x-[250%]'
      } -translate-y-1/2 bg-white p-4  transition-transform ease-in-out  rounded-lg duration-1000 shadow-2xl`}
    >
      <div className="w-[550px] bg-white  ">
        <h2 className="text-xl font-bold">Create Project</h2>
        <form
          className="flex flex-col mt-4 gap-y-2"
          onSubmit={handleAddProjectName}
        >
          <label htmlFor="project">Enter Project Name:</label>

          <input
            name="project"
            className=" w-[100%] h-[40px] rounded-md px-3 border-slate-400 border focus:outline-slate-400 "
            id="project"
            placeholder="Type here "
            type="text"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value) || setValid(false)
            }}
          />
          {valid && (
            <p className="text-xs font-medium text-red-500">
              Project Name Can't be empty
            </p>
          )}

          <div className="flex justify-end mt-6 font-semibold gap-x-4">
            <button
              onClick={handleCloseModal}
              className="text-red-500 duration-100 border-b-2 cursor-pointer border-b-white hover:border-b-red-500"
              type="reset"
            >
              Cancel
            </button>
            <button
              className="bg-purple text-white hover:bg-[#7e22cedd] duration-150 cursor-pointer px-4 py-1 rounded-md"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProject
