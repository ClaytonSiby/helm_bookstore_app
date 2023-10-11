import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchBooks } from '../../features/book/bookSlice'
import LoadingSpinner from '../LoadingSpinner'
import BookModal from '../BookModal'

const BookList: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books.booksData)
  const isLoading = useAppSelector((state) => state.books.isLoading)

  useEffect(() => {
    dispatch(fetchBooks() as any)
  }, [dispatch])

  return (
    <div className="py-3">
      {isLoading === 'loading' ? (
        <LoadingSpinner />
      ) : (
        <div>
          <BookModal />
          <h2>Book List</h2>
          {books?.map((book) => <div key={book.id}>{book.title}</div>)}
        </div>
      )}
    </div>
  )
}

export default BookList
