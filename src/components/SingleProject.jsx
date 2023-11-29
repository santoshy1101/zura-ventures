import React from 'react'

const SingleProject = ({ name }) => {
  return (
    <div className="flex items-center px-2 py-2 border shadow-lg cursor-pointer border-slate-400 gap-x-4 rounded-xl">
      <h1 className="p-5 text-5xl font-bold text-center text-white rounded-xl bg-purple">
        {getFirstLetters(name)}
      </h1>
      <div>
        <p className="text-2xl font-medium capitalize text-purple">{name}</p>
        <p className="text-black">4 Episodes</p>
        <p className="mt-3 text-xs text-slate-400">Last edited a week ago</p>
      </div>
    </div>
  )
}

export default SingleProject

function getFirstLetters(inputString) {
  // Split the input string into an array of words
  const words = inputString.split(' ')

  // Extract the first letter from each of the first two words
  const firstLetters = words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())

  return firstLetters.join('')
}
