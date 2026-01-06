import { Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { useSelector } from 'react-redux'

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  return (
    <div className='flex'>
        {isMenuOpen && <Sidebar />}
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<MainContainer />} />
            <Route path='/watch' element={<WatchPage />} />
          </Routes>
        </div>
    </div>
  )
}

export default Body