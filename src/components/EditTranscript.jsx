import React, { useState } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import {
  enterEditMode,
  exitEditMode,
  selectEditMode,
  selectEditedItemId,
} from '../redux/editModeSlice'

const EditTranscript = () => {
  const isEditMode = useSelector(selectEditMode)
  const editedItemId = useSelector(selectEditedItemId)
  const [textAreaValue, setTextAreaValue] = useState("");

  const dispatch = useDispatch()

  const handleEnterEditMode = (itemId) => {
    dispatch(enterEditMode(itemId))
  }

  const handleExitEditMode = () => {
    dispatch(exitEditMode())
  }
  const handleSaveExitEditMode = () => {
    dispatch(exitEditMode())
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-purple">Edit Transcript</h1>
       { isEditMode && <div className="flex gap-x-3 ">
          <button
            onClick={handleExitEditMode}
            className="py-1 ml-auto text-red-500 bg-white border rounded-md hover:bg-red-100 px-7"
          >
            Discard
          </button>
          <button className="bg-[#211935] text-white px-7 py-1 rounded-md hover:bg-[#211935e6] ">
            Save & Edit
          </button>
        </div>}
      </div>

      <div>
        <div className="w-[900px] rounded-lg border-purple h-[400px] border-2">
          <div className="flex items-center justify-between px-3 py-2">
            <div
              onClick={handleEnterEditMode}
              className="flex items-center  cursor-pointer w-[120px] rounded-full bg-[#4b4b4b] text-white px-2 py-1 gap-x-2"
            >
              <span>
                <MdOutlineModeEdit size={20} />
              </span>{' '}
              <p>Edit Mode</p>
            </div>

            <span className="border p-2 border-purple rounded-full text-purple bg-[#7e22ce5a]">
              <IoIosSearch size={20} />
            </span>
          </div>

          {/* textarea */}
          <div className="px-3">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="14"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-purple outline-purple border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              onChange={(e)=>setTextAreaValue(e.target.value)}
              value={textAreaValue}

            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTranscript
