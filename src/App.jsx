import BackToHome from './components/BackToHome'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import CreateProject from './components/CreateProject'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal, selectIsModalOpen } from './redux/modalSlice'

export default function App() {
  const isModalOpen = useSelector(selectIsModalOpen)

  return (
    <div className={` min-h-[100vh] `}>
      <Navbar />
      <BackToHome />
      <CreateProject />
      <LandingPage />
    </div>
  )
}
