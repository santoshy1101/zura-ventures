import React from 'react'
import Logo from '../assets/logo.svg'
import WordLogo from '../assets/word_logo.svg'
import Setting from '../assets/setting.svg'

const List = ['Projects', 'Widget Configurations', 'Deployment', 'Pricing']

const LeftSideBar = () => {
  return (
    <div className="h-[100vh] fixed bg-[#f3e8ff] w-[300px] px-3 py-5 flex flex-col gap-y-5  ">
      <div className="flex items-center pl-2 cursor-pointer gap-x-2">
        <img src={Logo} alt="Logo" />
        <img src={WordLogo} alt="WordLogo" />
      </div>
      <p className="pl-2 text-xs font-semibold">Podcast Upload Flow</p>

      <div className="flex flex-col text-sm font-semibold gap-y-2">
        {List.map((item, ind) => (
          <div
            className={`flex items-center px-2 py-2 rounded-full cursor-pointer gap-x-2 ${
              ind == 0 && 'bg-purple text-white'
            }`}
            key={ind}
          >
            {' '}
            <span
              className={`px-3 py-1 rounded-full ${
                ind == 0 ? 'bg-black' : 'bg-slate-400  '
              }  `}
            >
              {ind + 1}
            </span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="absolute flex items-center cursor-pointer bottom-4 pt-2 gap-x-2 left-5 w-[80%] border-t border-t-slate-400">
        <img
          className="px-2 py-2 rounded-full bg-slate-300"
          src={Setting}
          alt="setting"
        />
        <p className="text-sm font-semibold">Settings</p>
      </div>
    </div>
  )
}

export default LeftSideBar
