import { configureStore } from '@reduxjs/toolkit'
import { reducer as bookReducer } from '../features/book/bookSlice'
import { reducer as categoryReducer } from '../features/category/categorySlice'

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
