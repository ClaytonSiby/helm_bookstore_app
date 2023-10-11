import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchBooks } from './bookSlice'

const BookList: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books.books)

  useEffect(() => {
    dispatch(fetchBooks() as any)
  }, [dispatch])

  return (
    <div>
      <h2>Book List</h2>
      {JSON.stringify(books)}
    </div>
  )
}

export default BookList
