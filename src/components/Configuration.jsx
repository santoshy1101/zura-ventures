import React, { useState } from 'react'
import classNames from 'classnames'
import { LuUpload } from 'react-icons/lu'

const TabContent = ({ id, activeTab, children }) => (
  <div
    id={id}
    className={classNames(
      'p-4 rounded-lg bg-gray-50 dark:bg-gray-800',
      { hidden: activeTab !== id },
      { block: activeTab === id },
    )}
  >
    {children}
  </div>
)

const Configuration = () => {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div>
      <h1 className="text-3xl font-bold text-purple">Configuration</h1>
      <div className="container p-8 mx-auto">
        <div className="mb-4 border-b-2 border-b-slate-300">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="me-2" role="presentation">
              <button
                className={classNames(
                  'inline-block p-4 border-b-2 rounded-t-lg rounded-full ',
                  { 'border-purple': activeTab === 'general' },
                )}
                onClick={() => setActiveTab('general')}
              >
                General
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={classNames(
                  'inline-block p-4 border-b-2 rounded-full  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                  { 'border-purple': activeTab === 'display' },
                )}
                onClick={() => setActiveTab('display')}
              >
                Display
              </button>
            </li>
            <li role="presentation">
              <button
                className={classNames(
                  'inline-block p-4 border-b-2 rounded-full  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                  { 'border-purple': activeTab === 'advanced' },
                )}
                onClick={() => setActiveTab('advanced')}
              >
                Advanced
              </button>
            </li>
          </ul>
        </div>

        <div>
          <TabContent id="general" activeTab={activeTab}>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <div>
                <label htmlFor="chatboat" className="font-semibold text-md ">
                  Chatbot Name
                </label>
                <br />
                <input
                  type="text"
                  id="chatboat"
                  className="border px-2 mt-2 border-slate-400 w-[100%] h-[40px] rounded-md outline-slate-400"
                />
                <p className="text-xs text-slate-400">
                  Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                </p>
              </div>
              <div>
                <label htmlFor="chatboat" className="font-semibold text-md ">
                  Welcome Message
                </label>
                <br />
                <input
                  type="text"
                  id="chatboat"
                  className="border px-2 mt-2 border-slate-400 w-[100%] h-[40px] rounded-md outline-slate-400"
                />
                <p className="text-xs text-slate-400">
                  Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                </p>
              </div>
              <div>
                <label htmlFor="chatboat" className="font-semibold text-md ">
                  Input Placeholder
                </label>
                <br />
                <input
                  type="text"
                  id="chatboat"
                  className="border mt-2 border-slate-400 w-[100%] h-[40px] px-2 rounded-md outline-slate-400"
                />
                <p className="text-xs text-slate-400">
                  Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                </p>
              </div>
            </div>
          </TabContent>

          <TabContent id="display" activeTab={activeTab} className="">
            <div className="pb-10 text-sm text-gray-500 border-b-2 dark:text-gray-400 border-slate-300">
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <label
                    htmlFor="PrimaryColr"
                    className="font-semibold text-md "
                  >
                    Primary Color
                  </label>
                  <br />
                  <div className="flex items-center justify-between w-[210px] ">
                    <input
                      type="text"
                      value={'#7BD568'}
                      id="chatboat"
                      className="mt-2 px-2  border rounded-md h-[35px] border-slate-400 outline-slate-400"
                    />
                    <div className="w-[40px] h-[26px]  rounded-md bg-[#7bd568] "></div>
                  </div>
                  <p className="text-xs text-slate-400">
                    Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="PrimaryColr"
                    className="font-semibold text-md "
                  >
                    Font Color
                  </label>
                  <br />
                  <div className="flex items-center justify-between w-[210px] ">
                    <input
                      type="text"
                      id="chatboat"
                      value={'#3C3C3C'}
                      className="mt-2 px-2 border rounded-md h-[35px] border-slate-400 outline-slate-400"
                    />
                    <div className="w-[40px] h-[26px]  rounded-md bg-[#3C3C3C] "></div>
                  </div>
                  <p className="text-xs text-slate-400">
                    Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="PrimaryColr"
                    className="font-semibold text-md "
                  >
                    Font Size (in px)
                  </label>
                  <br />

                  <input
                    type="text"
                    id="chatboat"
                    value={'25'}
                    className="mt-2 px-2 w-[80%] border rounded-md h-[35px] border-slate-400 outline-slate-400"
                  />

                  <p className="text-xs text-slate-400">
                    Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="PrimaryColr"
                    className="font-semibold text-md "
                  >
                    Chat Height (in % of toatal screen)
                  </label>
                  <br />

                  <input
                    type="text"
                    id="chatboat"
                    value={'Lorem ipsuim'}
                    className="mt-2 px-2 border rounded-md h-[35px] border-slate-400 outline-slate-400 w-[80%]"
                  />

                  <p className="text-xs text-slate-400">
                    Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="PrimaryColr"
                    className="font-semibold text-md "
                  >
                    Show Sources
                  </label>
                  <br />
                  <p className="text-xs text-slate-400">
                    Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                  </p>
                </div>
                <div className=" w-[80%]">
                  <label className="relative inline-flex items-center  cursor-pointer left-[85%]">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked
                      disabled
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
                  </label>
                </div>
              </div>
            </div>

            <h1 className="font-bold text-md text-purple">Chat Icon</h1>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="chat_icon_size"
                  className="font-semibold text-md "
                >
                  Chat Icon Size
                </label>
                <br />

                <select
                  name=""
                  id=""
                  className="mt-2 px-2  w-[80%] border rounded-md h-[35px] border-slate-400 outline-slate-400 "
                >
                  <option value="">Small(48x48px)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="chat_icon_size"
                  className="font-semibold text-md "
                >
                  Postion on Screen
                </label>
                <br />

                <select
                  name=""
                  id=""
                  className="mt-2 px-2  w-[80%] border rounded-md h-[35px] border-slate-400 outline-slate-400 "
                >
                  <option value="">Bottom Right</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="chat_icon_size"
                  className="font-semibold text-md "
                >
                  Distance from Bottom (in px)
                </label>
                <br />

                <input
                  type="text"
                  className="mt-2 px-2  w-[80%] border rounded-md h-[35px] border-slate-400 outline-slate-400 "
                  value={20}
                />
              </div>
              <div>
                <label
                  htmlFor="chat_icon_size"
                  className="font-semibold text-md "
                >
                  Horizontal Distance (in px)
                </label>
                <br />

                <input
                  type="text"
                  className="mt-2 px-2  w-[80%] border rounded-md h-[35px] border-slate-400 outline-slate-400 "
                  value={20}
                />
              </div>

              <div>
                <label
                  htmlFor="chat_icon_size"
                  className="font-semibold text-md "
                >
                  Bot Icon
                </label>
                <br />

                <div className="flex cursor-pointer gap-x-4">
                  <img
                    className="w-[50px] h-[50px]  rounded-full"
                    src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?impolicy=resize&imwidth=480"
                    alt=""
                  />

                  <div className="flex flex-col">
                    <div className="flex flex items-center justify-around border-2 w-[150px] text-white bg-purple px-2 py-2 rounded-md">
                      Upload Image{' '}
                      <span>
                        <LuUpload size={20} />
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Recommended Size: 48x48px
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>

          <TabContent id="advanced" activeTab={activeTab}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is the Advanced tab's associated content.
            </p>
          </TabContent>
        </div>
      </div>
    </div>
  )
}

export default Configuration
