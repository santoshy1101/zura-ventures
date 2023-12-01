import BackToHome from './components/BackToHome'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import CreateProject from './components/CreateProject'
import { useSelector } from 'react-redux'
import { selectProjectNames } from './redux/projectSlice'
import ShowProjects from './components/ShowProjects'
import LeftSideBar from './components/LeftSideBar'
import Menu from './components/Menu'
import Upload from './components/Upload'
import EditTranscript from './components/EditTranscript'
import MenuHeader from './components/MenuHeader'
import Configuration from './components/Configuration'
import Account from './components/Account'
import AllRouter from './AllRoutes/AllRouter'
import { useLocation } from 'react-router-dom'

export default function App() {
  // const projectNames = useSelector(selectProjectNames)



  return (
    <div className={` min-h-[100vh] `}>
<AllRouter/>

    </div>
  )
}
