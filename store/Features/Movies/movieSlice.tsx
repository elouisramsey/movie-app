import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export const key = '4c710f14ee6eeae3c9a0b1b449034c89'

api.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0YzcxMGYxNGVlNmVlYWUzYzlhMGIxYjQ0OTAzNGM4OSIsInN1YiI6IjYyMThhNjA2N2RmZGE2MDA2OTJkZGQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Dvg7GG8b1XHLt5TL3o_TIfSr5ky6kldAf9-RbM2rIY`

const initialState = {
  movies: [],
  loading: false,
  error: null
}

// https://api.themoviedb.org/3/trending/movie/week?api_key=4c710f14ee6eeae3c9a0b1b449034c89'

axios.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0YzcxMGYxNGVlNmVlYWUzYzlhMGIxYjQ0OTAzNGM4OSIsInN1YiI6IjYyMThhNjA2N2RmZGE2MDA2OTJkZGQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Dvg7GG8b1XHLt5TL3o_TIfSr5ky6kldAf9-RbM2rIY`

export const getMovies = createAsyncThunk(
  `trending/movie/week?api_key=${key}`,
  async () => {
    try {
      const res = await api.get(`trending/movie/week?api_key=${key}`)
      return res.data.results
    } catch (error) {
      console.log(error)
    }
  }
)

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload
        state.loading = false
      })
      .addCase(getMovies.rejected, (state: any, action: any) => {
        state.error = action.error
        state.loading = false
      })
  }
})

const movieReducer = movieSlice.reducer
export default movieReducer
