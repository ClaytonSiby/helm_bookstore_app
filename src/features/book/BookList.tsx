import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from './bookSlice'
import { RootState } from '../../app/store'

const BookList: React.FC = () => {
  const dispatch = useDispatch()
  const books = useSelector((state: RootState) => state.books.books)

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
