import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../store/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get("v")

  console.log(videoId)

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  

  return (
    <div>WatchPage</div>
  )
}

export default WatchPage