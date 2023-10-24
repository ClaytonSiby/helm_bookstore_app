import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface Category {
  id: string
  name: string
  books: string[]
  created_at: string
  updated_at: string
}

type initialState = {
  categoriesData: Category[]
  isLoading: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: initialState = {
  categoriesData: [],
  isLoading: 'idle',
  error: '',
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get(
      'https://helm-bookstore-api.onrender.com/api/categories/'
    )
    return response.data
  }
)

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = 'succeeded'
        state.categoriesData = action.payload.categories
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = 'failed'
        state.error = action.error.message || 'Unknown error'
      })
  },
})

export const { actions, reducer } = categorySlice
