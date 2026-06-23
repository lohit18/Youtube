import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import searchSlice from './searchSlice'
import searchResultSlice from './searchResultSlice'   

export const store = configureStore({
  reducer: {
    app : appSlice,
    search : searchSlice,
    searchResult: searchResultSlice,                    

  },
})

export default store