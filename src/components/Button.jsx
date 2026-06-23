import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">{name}</button>
    </div>
  )
}

export default Button
