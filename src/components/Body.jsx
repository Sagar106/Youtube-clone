import { Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/watch' element={<WatchPage />} />
        </Routes>
    </div>
  )
}

export default Body