import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const{category,
          sort,
          order,
          search} = params;
    const {data} = await axios.get(
        `https://661b801e65444945d04f9c13.mockapi.io/items?sortBy=${sort}&order=${order}${category}${search} `,
      );
    return data
  },
)

const initialState = {
  items: [],
  status: 'loading', //loading, success, error
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading'
      state.items = []
      console.log('pending');
    })
    .addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload
      console.log('success');
    })
    .addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error'
      state.items = []
    })
  },

})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer