import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchBooks } from '../../features/book/bookSlice'
import { fetchCategories } from '../../features/category/categorySlice'
import LoadingSpinner from '../LoadingSpinner'
import AddBookModal from '../AddBookModal'
import BookCard from '../BookCard'

const BookList: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.books.booksData)
  const isLoading = useAppSelector((state) => state.books.isLoading)

  useEffect(() => {
    const fetchBooksAndCategoriesData = async () => {
      await Promise.all([dispatch(fetchBooks()), dispatch(fetchCategories())])
    }

    fetchBooksAndCategoriesData()
  }, [dispatch])

  return (
    <div className="py-3">
      {isLoading === 'loading' ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="d-flex justify-content-between my-3">
            <AddBookModal />
            <h2 className="text-secondary">Book List</h2>
          </div>
          <div className="row">
            {books?.map((book) => (
              <BookCard
                key={book.id}
                bookAuthor={book.author}
                bookTitle={book.title}
                bookCategory={book.categories}
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
