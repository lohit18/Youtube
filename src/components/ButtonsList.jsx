import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  const list = ["All", "Music", "Gaming", "News", "Sports", "Downlaods", "Liekd ", "Shopping", "Films", "Courses", "Podcast", "Live", "Shorts"]
  return (
    <div className="flex gap-5 p-5 ">
      {list.map((item, index) => <Button key={index} name={item} />)}
    </div>
  )
}

export default ButtonsList
