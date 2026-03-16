import Servises from './screens/Services'
import FollowMe from './screens/FollowMe'
import './index.css'
function App() {


  return (
    <>
    <div className="w-full min-h-screen flex flex-col bg-white gap-[30px]">
      <Servises />
      <FollowMe />
    </div>
    </>
  )
}

export default App
