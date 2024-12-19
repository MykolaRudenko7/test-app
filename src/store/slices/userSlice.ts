import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../../types'
import { RootState } from '../index'

const initialState: UserState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
    },
    logout: (state) => {
      state.isLoggedIn = false
      localStorage.removeItem('isLoggedIn')
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn
