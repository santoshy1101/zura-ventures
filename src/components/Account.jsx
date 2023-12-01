import React from 'react'

const Account = () => {
  const imageUrl = localStorage.getItem('imageUrl')
  return (
    <div className="flex flex-col mt-5 gap-y-3">
      <h1 className="text-3xl font-bold text-purple">Account Settings</h1>

      <div className="flex items-center justify-between mt-5">
        {imageUrl ? (
          <img
            className="w-[120px] h-[120px]  rounded-full"
            src={imageUrl}
            alt=""
          />
        ) : (
          <img
            className="w-[120px] h-[120px]  rounded-full"
            src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?impolicy=resize&imwidth=480"
            alt=""
          />
        )}
        <div>
          <label htmlFor="user_name">User Name</label>
          <br />
          <input
            type="text"
            id="user_name"
            placeholder="Enter Name"
            className="border outline-slate-400 px-2 w-[300px] h-[40px] rounded-md border-slate-400"
            value={'Santosh Yadav'}
          />
        </div>
        <div>
          <label htmlFor="user_email">Email</label>
          <br />
          <input
            className="border outline-slate-400 px-2 w-[300px] h-[40px] rounded-md border-slate-400"
            type="text"
            id="user_email"
            placeholder="Enter Email"
            value={'Santosh901@gmail.com'}
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-purple">Subscriptions</h1>

      <div className="flex items-center justify-between px-10 py-3 mt-5 font-semibold text-white rounded-md bg-gradient-to-r from-[#7e22cd] to-[#4c0589]">
        <p>
          You are currently on the{' '}
          <span className="underline">Ques AI Basic Plan!</span>
        </p>

        <button className="px-5 py-2 bg-white rounded-lg cursor-pointer text-purple">
          Upgrade
        </button>
      </div>

      <p className="text-sm font-semibold text-red-500 underline cursor-pointer">
        Cancel Subscription
      </p>
    </div>
  )
}

export default Account
