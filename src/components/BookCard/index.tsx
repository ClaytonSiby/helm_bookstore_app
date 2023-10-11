import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteBook } from '../../features/book/bookSlice'
import {
  formatDateString,
  getFirstBookCategoryName,
} from '../../utils/formatDateString'
import UpdateBookModal from '../UpdateBookModal'

interface BookProps {
  bookId: string
  bookTitle: string
  bookAuthor: string
  bookCategories: string[]
  bookUpdatedAt: string
}

const BookCard: React.FC<BookProps> = ({
  bookId,
  bookTitle,
  bookAuthor,
  bookCategories,
  bookUpdatedAt,
}) => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.categories.categoriesData)

  const handleDeleteBook = async () => {
    try {
      await dispatch(deleteBook(bookId))
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="col-12 col-md-3">
      <div className="card mb-3 col-12">
        <div className="row g-0">
          <div className="col-12">
            <div className="card-body">
              <h5 className="card-title text-secondary">{bookTitle}</h5>
              <p className="card-text">
                <small className="text-body-secondary">
                  <span className="text-info">Author: </span> {bookAuthor}
                </small>
              </p>
              <p className="text-secondary-emphasis">
                <small>
                  <span className="text-info">Category: </span>
                  {getFirstBookCategoryName(bookCategories, categories)}
                </small>
              </p>
              <p className="card-text">
                <small className="text-secondary-emphasis">
                  <span className="text-info">Last updated: </span>
                  {formatDateString(bookUpdatedAt)}
                </small>
              </p>
              <div className="row">
                <div className="col-6">
                  <UpdateBookModal bookId={bookId} />
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-sm bg-danger-subtle text-body-secondary"
                    onClick={handleDeleteBook}
                  >
                    Delete Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard
