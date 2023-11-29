import BackToHome from './components/BackToHome'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import CreateProject from './components/CreateProject'
import { useSelector } from 'react-redux'
import { selectProjectNames } from './redux/projectSlice'
import ShowProjects from './components/ShowProjects'

export default function App() {
  const projectNames = useSelector(selectProjectNames)

  return (
    <div className={` min-h-[100vh] `}>
      <Navbar />
      <BackToHome />
      <CreateProject />
      {projectNames.length > 0 ? <ShowProjects /> : <LandingPage />}
    </div>
  )
}
