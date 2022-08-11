import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  time: '',
  theatre: '',
  date: '',
  resolution: ''
}

const cinemaSlice = createSlice({
  name: 'cinema',
  initialState,
  reducers: {
    setTime: (state: any, { payload }: any) => {
      return {
        ...state,
        time: payload
      }
    },

    setTheatre: (state: any, { payload }: any) => {
      return {
        ...state,
        theatre: payload
      }
    },
    setDate: (state: any, { payload }: any) => {
      return {
        ...state,
        date: payload
      }
    },
    setResolution: (state: any, { payload }: any) => {
      return {
        ...state,
        resolution: payload
      }
    }
  }
})

export const { setTime, setTheatre, setDate, setResolution } =
  cinemaSlice.actions
const cinemaReducer = cinemaSlice.reducer
export default cinemaReducer
