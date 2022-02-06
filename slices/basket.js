import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state,action) => {
        state.items=[...state.items,action.payload]
      
    },
    removeItem: (state,action) => {
     
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {addItem,removeItem} = basketSlice.actions
export const selectItem=(state)=>state.basket.items
export default basketSlice.reducer