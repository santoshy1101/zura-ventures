import React, { useEffect, useState } from 'react'

import Youtube from '../assets/youtube.svg'
import Spotify from '../assets/spotify.svg'
import Rss from '../assets/rss.svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectUploadedItems } from '../redux/uploadSlice'

import {
  openUpload,
  selectIsModalOpen,
  selectIsUploadOpen,
} from '../redux/modalSlice'
import SelectFile from './SelectFile'
import UploadList from './UploadLIst'
import { list } from 'postcss'
import TryOutAd from './TryOutAd'
import MenuHeader from './MenuHeader'

const List = [
  {
    icon: Youtube,
    first: 'Upload',
    last: 'Youtube Video',
  },
  {
    icon: Spotify,
    first: 'Upload',
    last: 'Spotify Podcast',
  },
  {
    icon: Rss,
    first: 'Upload from',
    last: 'RSS Feed',
  },
  {
    icon: Youtube,
    first: 'Upload',
    last: 'Youtube Video',
  },
  {
    icon: Spotify,
    first: 'Upload',
    last: 'Spotify Podcast',
  },
  {
    icon: Rss,
    first: 'Upload from',
    last: 'RSS Feed',
  },
]

const Menu = () => {
  const [options, setOptions] = useState(List)
  const dispatch = useDispatch()
  const uploadedItems = useSelector(selectUploadedItems)

  const handleOpenUpload = () => {
    dispatch(openUpload())
  }

  useEffect(() => {
    if (uploadedItems.length > 0) {
      setOptions(List.slice(0, 3))
    }
  }, [uploadedItems])
  return (
    <div className=" w-[calc(100%-300px)] px-10 py-2 flex flex-col gap-y-3">

      <h1 className="text-4xl font-bold text-purple">Upload</h1>

      <div className="grid grid-cols-3 gap-y-5 ring-red-200 gap-x-32">
        {options.map(({ icon, first, last }, ind) => (
          <div
            className="flex items-center px-2 py-2 border rounded-lg shadow-2xl cursor-pointer border-slate-400 gap-x-5"
            key={ind}
            onClick={handleOpenUpload}
          >
            <img src={icon} alt="" />
            <span className="text-xs font-bold">
              <p>{first}</p>
              <p>{last}</p>
            </span>
          </div>
        ))}
      </div>

      {uploadedItems.length > 0 ? (
        <>
          <TryOutAd />
          <UploadList />
        </>
      ) : (
        <SelectFile />
      )}
    </div>
  )
}

export default Menu
