import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonsList = ["All", "Action", "Sports", "Movies", "Music", "Entertainment", "Gaming"]

  return (
    <div className='flex my-5 mx-5'>
      {buttonsList.map((btn, idx) => (
        <Button key={idx} btnName={btn} />
      ))}
    </div>
  )
}

export default ButtonList