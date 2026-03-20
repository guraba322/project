import Servises from './screens/Services'
import FollowMe from './screens/FollowMe'
import ContactPage from './screens/ContactPage'
import Footer from './screens/Footer'
import './index.css'
function App() {


  return (
    <>
    <div className="w-full min-h-screen flex flex-col bg-white gap-[16px] md:gap-[30px]">
      <Servises />
      <FollowMe />
      <ContactPage />
      <Footer />
    </div>
    </>
  )
}

export default App
