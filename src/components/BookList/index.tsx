import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchBooks } from '../../features/book/bookSlice'
import LoadingSpinner from '../LoadingSpinner'
import BookModal from '../BookModal'
import BookCard from '../BookCard'

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
          <div className="d-flex justify-content-between my-3">
            <BookModal />
            <h2 className="text-secondary">Book List</h2>
          </div>
          <div className="row">
            {books?.map((book) => (
              <BookCard
                key={book.id}
                bookAuthor={book.author}
                bookTitle={book.title}
                bookCategory={book.category}
                bookUpdatedAt={book.updated_at}
                bookId={book.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default BookList
