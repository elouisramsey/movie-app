import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_TOKEN, MOVIE_API_KEY, MOVIE_BASE_URL } from '@env'

export const api = axios.create({
  baseURL: MOVIE_BASE_URL
})

export const key = MOVIE_API_KEY

api.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`

const initialState = {
  movies: [],
  loading: false,
  error: null
}

axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`

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
