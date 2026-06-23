import { createSlice } from '@reduxjs/toolkit'

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState: {
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})

export const { setSearchQuery } = searchResultSlice.actions
export default searchResultSlice.reducer