import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

// interface for the book object
interface Book {
  id: string
  title: string
  author: string
  description: string
  category: string
  createdAt: string
  updatedAt: string
}

type initialState = {
  books: Book[]
  isLoading: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(
    'https://helm-bookstore-api.onrender.com/api/books/'
  )
  return response.data
})

export const fetchBook = createAsyncThunk('books/fetchBook', async (id) => {
  const response = await axios.get(
    `https://helm-bookstore-api.onrender.com/api/books/${id}`
  )
  return response.data
})

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(
    'https://helm-bookstore-api.onrender.com/api/books/',
    book
  )
  return response.data
})

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  const response = await axios.delete(
    `https://helm-bookstore-api.onrender.com/api/books/${id}`
  )
  return response.data
})

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async (book: Book) => {
    const response = await axios.put(
      `https://helm-bookstore-api.onrender.com/api/books/${book.id}`,
      book
    )
    return response.data
  }
)

const initialState: initialState = {
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
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
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
