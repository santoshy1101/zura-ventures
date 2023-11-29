import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../redux/modalSlice'
import SingleProject from './SingleProject'
import { selectProjectNames } from '../redux/projectSlice'

const ShowProjects = () => {
  const projectNames = useSelector(selectProjectNames)
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    dispatch(openModal())
  }
  return (
    <div className="mt-10 px-[100px]">
      <div className="flex items-center justify-between ">
        <h1 className="text-5xl font-bold text-purple">Projects</h1>
        <div
          onClick={handleOpenModal}
          className="bg-[#211935] text-[#f4f4f4] items-center flex gap-x-2 px-2 py-1 rounded-md cursor-pointer hover:bg-[#211935af] "
        >
          <span>
            <FaPlusCircle size={20} />
          </span>
          <p className="text-xl font-semibold">Create New Project</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-7">
        {projectNames.map((item, ind) => {
          return <SingleProject key={ind} name={item} />
        })}
      </div>
    </div>
  )
}

export default ShowProjects
