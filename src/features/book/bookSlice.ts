import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(
    'https://helm-bookstore-api.onrender.com/api/books/'
  )
  return response.data
})

const initialState = {
  books: [],
  isLoading: 'idle',
  error: '',
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = 'succeeded'
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = 'failed'
        state.error = action.error.message || 'Unknown error'
      })
  },
})

export const { actions, reducer } = bookSlice
