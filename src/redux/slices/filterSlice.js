import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortId: 0
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCatgoryId(state, action) {
      state.categoryId = action.payload;   
    },
  }
})

export const { setCatgoryId } = filterSlice.actions

export default filterSlice.reducer