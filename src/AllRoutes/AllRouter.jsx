import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import UpadatePage from '../components/UpadatePage'
import Menu from '../components/Menu'
import EditTranscript from '../components/EditTranscript'

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload/*" element={<UpadatePage />} />
      
     
    </Routes>
  )
}

export default AllRouter
