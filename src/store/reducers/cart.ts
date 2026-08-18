import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Game } from '../../types/Game'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const gameAlreadyAdded = state.items.some((item) => item.id === action.payload.id)

      if (!gameAlreadyAdded) {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    },
  },
})

export const { add, remove, clear } = cartSlice.actions
export default cartSlice.reducer
