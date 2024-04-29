import { createSlice } from '@reduxjs/toolkit';
import {getCartFromLS} from '../../utils/getCartFromLS.js';
import {calcTotalPrice} from '../../utils/calcTotalPrice.js';
import {calcTotalCount} from '../../utils/calcTotalCount.js';


const { items, totalPrice, totalCount } = getCartFromLS();

const initialState = {
  totalPrice:  totalPrice,
  items:  items,
  totalCount: totalCount,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state,  {payload}) {
      const findItem = state.items.find(obj => {
        return ((obj.id === payload.id) &&
        (obj.size === payload.size) &&
        (obj.type === payload.type))
        });
        findItem ? findItem.count++ : state.items.push({
          ...payload, count: 1
        });

        state.totalPrice = calcTotalPrice(state.items) 

        state.totalCount = calcTotalCount(state.items)

      // state.totalPrice = state.items.reduce((sum, obj) => { return obj.price * obj.count + sum;}, 0);

      // state.totalCount = state.items.reduce((sum, obj) => {
      //   return obj.count + sum
      // }, 0)
    },        
    minusItem(state, {payload}) {
        const findItem = state.items.find(obj => {
          return ((obj.id === payload.id) && 
          (obj.size === payload.size) &&
          (obj.type === payload.type))
        });
        findItem && findItem.count--;
        state.totalPrice -= findItem.price;
        state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
      },
    removeItem(state, {payload}) {
        const findItem = state.items.find(obj => {
          return ((obj.id === payload.id) &&
          (obj.size === payload.size) &&
          (obj.type === payload.type))
        });
        state.totalPrice -= findItem.price * findItem.count;
        state.items = state.items.filter(obj => {
          return ((obj.id !== payload.id) ||
          (obj.size !== payload.size) ||
          (obj.type !== payload.type))
        });
        state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0);
      },
    clearItem(state){
      state.items=[],
      state.totalPrice=0},
    },
    
})

export const { addItem, minusItem, clearItem, removeItem } = cartSlice.actions

export default cartSlice.reducer