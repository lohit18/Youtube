import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { useState, useEffect } from 'react'
import { cacheResults } from '../utils/searchSlice'
import { setSearchQuery } from '../utils/searchResultSlice'


const Head = () => {
  const [searchQuery, setSearchQueryLocal] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [isShow, setShow] = useState(false)
  const dispatch = useDispatch()

 
  const searchCache = useSelector(store => store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        searchQueryHandler()
      }
    }, 200)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const searchQueryHandler = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }


  const handleSearchSubmit = () => {
    dispatch(setSearchQuery(searchQuery))
    setShow(false)
  }

  const handleSuggestionClick = (item) => {
  setSearchQueryLocal(item)       
  dispatch(setSearchQuery(item))  
  setShow(false)           
}

  return (
    <div className="flex items-center justify-between px-5 py-3 shadow-md sticky top-0 bg-white z-10">

  
  <div className='flex items-center gap-4'>
    <img onClick={() => toggleMenuHandler()} className="h-7 cursor-pointer" src="/hamberger.png" alt="hamburder logo" />
    <img className="h-7" src="/Youtube_logo.png" alt="youtube logo" />
  </div>

  
  <div className='relative flex-1 max-w-xl mx-10'>
    <div className='flex'>
      <input
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 100)}
        onChange={(e) => setSearchQueryLocal(e.target.value)}
        value={searchQuery}
        type="text"
        placeholder='Search'
        className='border border-gray-300 rounded-l-full py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-grey-400'
      />
      <button
        onClick={handleSearchSubmit}
        className='bg-gray-100 border border-gray-300 rounded-r-full px-5 hover:bg-gray-200'
      >
        🔍
      </button>
    </div>

    {isShow && suggestions.length > 0 && (
      <div className='absolute bg-white shadow-xl rounded-xl mt-1 w-full z-20'>
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item)} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
              🔍 {item}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>


  <img className="h-8 rounded-full" src="/profile.png" alt="user profile" />

</div>
  )
}

export default Head