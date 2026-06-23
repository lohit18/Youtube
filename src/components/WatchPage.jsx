import { useEffect, useState } from 'react'
import { closeMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import { YOUTUBE_API } from '../utils/constants'

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get("v")
  const dispatch = useDispatch()

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  useEffect(() => {
    getSuggestions()
  }, [videoId])

  const getSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_API}react`)
    const json = await data.json()
    setSuggestions(json.items)
  }

  return (
    <div className='flex px-5 py-3'>
      <div className='flex flex-col w-2/3'>
        <div className='aspect-video w-full'>
          <iframe
            className='w-full h-full rounded-xl'
            src={`https://www.youtube.com/embed/${videoId}?si=`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>

      <div className='flex flex-col w-1/3 pl-5'>
        {suggestions.map((item) => (
          <a key={item.id.videoId} href={`/watch?v=${item.id.videoId}`} className='flex mb-3'>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className='w-40 h-24 object-cover rounded-lg'
            />
            <div className='px-2'>
              <p className='font-bold text-sm line-clamp-2'>{item.snippet.title}</p>
              <p className='text-xs text-gray-600'>{item.snippet.channelTitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default WatchPage