import React, { useEffect } from 'react'
import Navbar from './Navbar'
import BackToHome from './BackToHome'
import CreateProject from './CreateProject'
import ShowProjects from './ShowProjects'
import LandingPage from './LandingPage'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects, selectProjectNames } from '../redux/projectSlice'

const Home = () => {
  const projectNames = useSelector(selectProjectNames)
  const dispatch = useDispatch()
  useEffect(() => {
    // Call the getProjects action when the component mounts
    dispatch(getProjects())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <BackToHome />
      <CreateProject />
      {projectNames.length > 0 ? <ShowProjects /> : <LandingPage />}
    </div>
  )
}

export default Home
