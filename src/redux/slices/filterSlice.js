import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  categoryId: 0,
  sortType: {
  value: "Popularity",
  sortProperty: "rating"},
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
  }
})

export const { setCatgoryId, setSortType } = filterSlice.actions

export default filterSlice.reducer