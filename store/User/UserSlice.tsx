import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: any, { payload }: any) => {
      return {
        ...state,
        user: payload
      }
    },
    setUserNull: () => initialState
  }
})

export const { setUser, setUserNull } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
