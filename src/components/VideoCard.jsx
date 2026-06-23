import React from 'react'

const VideoCard = ({ data }) => {
  return (
    <div className='w-60 h-60 m-2 p-2 shadow-lg overflow-hidden flex flex-col'>
      <img
        src={data.snippet.thumbnails.medium.url}
        alt="video thumbnail"
        className='rounded-lg w-full h-32 object-cover shrink-0'
      />
      <ul className='flex-1 overflow-hidden'>
        <li className='font-bold overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {data.snippet.title}
        </li>
        <li className='text-sm text-gray-600'>{data.snippet.channelTitle}</li>
        <li className='text-sm text-gray-600'>
          {Intl.NumberFormat("en", { notation: "compact" }).format(data.viewCount)} views
        </li>
      </ul>
    </div>
  )
}

export default VideoCard