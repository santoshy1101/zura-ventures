import React from 'react'
import Upload from './Upload'
import LeftSideBar from './LeftSideBar'
import MenuHeader from './MenuHeader'
import EditTranscript from './EditTranscript'
import Menu from './Menu'
import Configuration from './Configuration'
import Account from './Account'
import { useLocation } from 'react-router-dom'

const UpadatePage = () => {
  const { pathname } = useLocation()
  return (
    <div className="flex ">
      <Upload />
      <LeftSideBar />

      {
        <div className="w-[100%] pl-[320px] flex flex-col px-10 py-2  gap-y-3">
          <MenuHeader page={pathname} />
          {pathname === '/upload' && <Menu />}
          {pathname === '/upload/transcript' && <EditTranscript />}
          {pathname === '/upload/widget_configuration' && <Configuration />}
          {pathname === '/upload/account' && <Account />}
        </div>
      }
    </div>
  )
}

export default UpadatePage
