import React from 'react'
import { MdHome } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import Lang from '../assets/lang.svg'
import Home from '../assets/home.svg'

const MenuHeader = () => {
  return (
    <div className="flex items-center justify-between px-2 font-semibold ">
      <div className="flex items-center gap-x-2 ">
        <span>
          <img src={Home} alt="" />
        </span>
        <p className="text-slate-400">/</p>
        <p className="text-slate-400">Sample Project</p>
        <p className="text-slate-400">/</p>
        <p className="text-purple">Upload</p>
      </div>

      <div className="flex items-center gap-x-2">
        <span>
          <IoMdArrowDropdown size={20} />
        </span>
        <p>EN</p>
        <img src={Lang} alt="lang" />
      </div>
    </div>
  )
}

export default MenuHeader
