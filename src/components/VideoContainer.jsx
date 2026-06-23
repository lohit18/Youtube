import React from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API, VIDEOS_API } from '../utils/constants'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'  

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  
  const searchQuery = useSelector(store => store.searchResult.searchQuery)

  useEffect(() => {
    if (searchQuery) {
      getVideos(searchQuery)   
    } else {
      getVideos("react")        
    }
  }, [searchQuery])

  const getVideos = async (query) => {
    
    const data = await fetch(`${YOUTUBE_API}${query}`)
    const json = await data.json()

    if (!json.items) {
    console.error("YouTube API error:", json.error?.message || json)
    return   
  }
    const items = json.items

    const videoIds = items.map((item) => item.id.videoId).join(",")
    const statsRes = await fetch(`${VIDEOS_API}${videoIds}`)
    const statsJson = await statsRes.json()
    
    const statsMap = {}
    statsJson.items.forEach((v) => {
      statsMap[v.id] = v.statistics.viewCount
    })

   
    const merged = items.map((item) => ({
      ...item,
      viewCount: statsMap[item.id.videoId],
    }))

    setVideos(merged)
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {videos.length !== 0 ? videos.map(video =>
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <VideoCard data={video} />
        </Link>
      ): <h1>No Videos to show</h1> }
    </div>
  )
}

export default VideoContainer