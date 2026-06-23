import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { COMMENTS_API } from '../utils/constants'
import { useSearchParams } from 'react-router-dom'

const CommentsContainer = () => {
  const [comments, setComments] = useState([])
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get("v")

  useEffect(() => {
    getComments()
  }, [videoId])

  const getComments = async () => {
    const data = await fetch(`${COMMENTS_API}${videoId}`)
    const json = await data.json()

    const formatted = json.items.map((item) => {
      const top = item.snippet.topLevelComment.snippet
      const replies = item.replies
        ? item.replies.comments.map((reply) => ({
            name: reply.snippet.authorDisplayName,
            comment: reply.snippet.textDisplay,
            replies: [],
          }))
        : []

      return {
        name: top.authorDisplayName,
        comment: top.textDisplay,
        replies: replies,
      }
    })

    setComments(formatted)
  }

  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>comments:</h1>
      {comments.map((c, index) => (
        <Comment key={index} data={c} />
      ))}
    </div>
  )
}

export default CommentsContainer