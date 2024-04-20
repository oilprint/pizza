import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  categoryId: 0,
  sortType: {
  value: "Popularity",
  sortProperty: "rating"},
  searchValue: ''
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCatgoryId(state, action) {
      state.categoryId = action.payload;   
    },
    setSortType(state, action) {
      state.sortType = action.payload;   
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;   
    },
    setFilters(state, action) {
      state.sortType = action.payload.sortType;   
      state.categoryId = Number(action.payload.categoryId);   
    },
  }
})

export const { setCatgoryId, setSortType, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer