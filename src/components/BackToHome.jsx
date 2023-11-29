import React from 'react'
import { MdHome } from 'react-icons/md'

const BackToHome = () => {
  return (
    <div className="flex items-center text-[#3c3c3c] hover:bg-[#635e7132] hover:ring-0 ring-1 ring-gray w-[150px] rounded-full shadow-xl justify-center px-2 relative top-[20px] left-[100px] cursor-pointer">
      <span>
        <MdHome size={30} />
      </span>
      <p className="font-medium ">Back to Home</p>
    </div>
  )
}

export default BackToHome
