import BackToHome from './components/BackToHome'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg- min-h-[100vh] ">
      <Navbar />
      <BackToHome />
      <LandingPage />
    </div>
  )
}
