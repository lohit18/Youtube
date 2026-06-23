import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-50 shrink-0">
        <ul>
  <li className='rounded-lg hover:bg-gray-100'>
    <Link to="/" className='block px-3 py-2'>Home</Link>
  </li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Shorts</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Videos</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Live</li>
</ul>
      <h1 className="font-bold text-lg pt-5">Subscription</h1>
<ul>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Music</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Gaming</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>News</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Sports</li>
</ul>

<h1 className="font-bold text-lg pt-5">Watch Later</h1>
<ul>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Music</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Gaming</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>News</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Sports</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Downloads</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Liked Videos</li>
</ul>

<h1 className="font-bold text-lg pt-5">Explore</h1>
<ul>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Shopping</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Films</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Courses</li>
  <li className='px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>Podcast</li>
</ul>
    </div>
  )
}

export default SideBar
