import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if (!isMenuOpen) return null

  return (
    <div className='w-60 shadow p-2'>
      <ul className='m-2'>
        <li className='mt-2 p-2 bg-red-300 rounded-sm'>Home</li>
        <li className='mt-2 p-2 bg-red-300 rounded-sm'>Shorts</li>
      </ul>
      <h1 className='font-bold mx-2'>Subscriptions</h1>
      <ul className='m-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar