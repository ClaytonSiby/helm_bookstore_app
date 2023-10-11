import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchBooks } from '../../features/book/bookSlice'
import LoadingSpinner from '../LoadingSpinner'
import BookModal from '../BookModal'
import Book from '../Book'

const BookList: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books.booksData)
  const isLoading = useAppSelector((state) => state.books.isLoading)

  useEffect(() => {
    const fetchBooksData = async () => {
      await dispatch(fetchBooks())
    }

    fetchBooksData()
  }, [dispatch])

  return (
    <div className="py-3">
      {isLoading === 'loading' ? (
        <LoadingSpinner />
      ) : (
        <div>
          <BookModal />
          <h2>Book List</h2>
          {books?.map((book) => (
            <Book
              key={book.id}
              bookAuthor={book.author}
              bookTitle={book.title}
              bookCategory={book.category}
              bookUpdatedAt={book.updatedAt}
              bookId={book.id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BookList
