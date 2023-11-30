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

export default function App() {
  const projectNames = useSelector(selectProjectNames)

  return (
    <div className={` min-h-[100vh] `}>
      {/* <Navbar />
      <BackToHome />
      <CreateProject />
      {projectNames.length > 0 ? <ShowProjects /> : <LandingPage />} */}
     
     <div className='flex '>
     <Upload/>
     <LeftSideBar/>
    {/*  <Menu/> */}
    <div className='w-[100%] pl-[320px] flex flex-col px-10 py-2  gap-y-3'>
    <MenuHeader/>
  {/*   <EditTranscript/> */}
 {/*  <Configuration/> */}
 <Account/>
    </div>
  
     </div>
    </div>
  )
}
