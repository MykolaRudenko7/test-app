import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import itemsData from '../../data/items.json'
import { Item, ItemsState } from '../../types'

const initialState: ItemsState = {
  items: itemsData.map((item) => {
    const editedItem = localStorage.getItem(`item-${item.id}`)
    return editedItem ? JSON.parse(editedItem) : item
  }),
  loading: false,
  error: null,
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
      localStorage.setItem(`item-${action.payload.id}`, JSON.stringify(action.payload))
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
        localStorage.setItem(`item-${action.payload.id}`, JSON.stringify(action.payload))
      }
    },
    clearItems: (state) => {
      state.items = []
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('item-')) {
          localStorage.removeItem(key)
        }
      })
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { setItems, addItem, updateItem, setLoading, setError } = itemsSlice.actions

export default itemsSlice.reducer
