import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  time: '',
  theatre: '',
  date: '',
  resolution: '',
  movieName: '',
  selectedSeat: '',
  moviePoster: ''
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
    },
    setMovieName: (state: any, { payload }: any) => {
      return {
        ...state,
        movieName: payload
      }
    },
    setSelectedSeat: (state: any, { payload }: any) => {
      return {
        ...state,
        selectedSeat: payload
      }
    },
    setMoviePoster: (state: any, { payload }: any) => {
      return {
        ...state,
        moviePoster: payload
      }
    },
    reset() {
      return {
        ...initialState
      }
    }
  }
})

export const {
  setTime,
  setTheatre,
  setDate,
  setResolution,
  setMovieName,
  setSelectedSeat,
  setMoviePoster,
  reset
} = cinemaSlice.actions
const cinemaReducer = cinemaSlice.reducer
export default cinemaReducer
