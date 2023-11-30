import React from 'react'
import { useSelector } from 'react-redux'
import { selectUploadedItems } from '../redux/uploadSlice'

const UploadList = () => {
  const uploadedItems = useSelector(selectUploadedItems)
  return (
    <div className="relative overflow-x-auto border shadow-md sm:rounded-lg border-slate-400">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs font-semibold text-gray-700 uppercase border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Upload Date & Time
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {uploadedItems.map((item, ind) => {
            return (
              <tr
                key={ind}
                className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-slate-400"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black text-gray-900 capitalize blackspace-nowrap"
                >
                  {item.name}
                </th>

                <td className="px-6 py-4">{item.timestamp}</td>
                <td className="px-6 py-4">Done</td>
                <td className="px-6 py-4 ">
                  <a
                    href="#"
                    className="px-4 py-2 font-medium border border-slate-400 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 font-medium text-red-500 border rounded-r border-slate-400 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UploadList
