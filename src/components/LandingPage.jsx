import React from 'react'
import LandingLogo from '../assets/landing_logo.svg'
import { FaPlusCircle } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'

const LandingPage = () => {
  return (
    <div className="flex flex-col  items-center ">
      <div className="w-[70%] flex flex-col  items-center gap-2 mt-12">
        <h1 className="text-4xl font-bold text-purple">Create a New Project</h1>
        <div className="w-[35%]">
          <img className="w-[100%]" src={LandingLogo} alt="Landing Logo" />
        </div>

        <div className="text-center text-[16px] text-gray">
          <p className="w-[680px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
        </div>

        <div className="bg-[#211935] text-[#f4f4f4] flex gap-x-2 px-5 py-3 rounded-lg cursor-pointer hover:bg-[#211935af]">
          <span>
            <FaPlusCircle size={30} />
          </span>
          <p className="text-xl font-semibold">Create New Project</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
