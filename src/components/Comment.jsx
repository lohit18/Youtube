import React from 'react'

const Comment = ({ data }) => {
  const { name, comment, replies } = data

  return (
    <div className='m-5'>
      <div className='flex'>
        <img className='w-10 h-10' alt="Profile image" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" />
        <div className='px-3'>
          <p className='font-bold'>{name}</p>
          <p dangerouslySetInnerHTML={{ __html: comment }}></p>
        </div>
      </div>

      {/* NEW: render replies, indented */}
      <div className='ml-10'>
        {replies.map((reply, index) => (
          <Comment key={index} data={reply} />
        ))}
      </div>
    </div>
  )
}

export default Comment;