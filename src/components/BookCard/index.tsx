import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { deleteBook } from '../../features/book/bookSlice'
import formatDateString from '../../utils/formatDateString'

interface BookProps {
  bookId: string
  bookTitle: string
  bookAuthor: string
  bookCategory: string[]
  bookUpdatedAt: string
}

const BookCard: React.FC<BookProps> = ({
  bookId,
  bookTitle,
  bookAuthor,
  bookCategory,
  bookUpdatedAt,
}) => {
  const dispatch = useAppDispatch()

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
                  Author: {bookAuthor}
                </small>
              </p>
              <p className="text-secondary-emphasis">
                Category: {bookCategory}
              </p>
              <p className="card-text">
                <small className="text-secondary-emphasis">
                  Last updated: {formatDateString(bookUpdatedAt)}
                </small>
              </p>
              <div className="row">
                <div className="col-6">
                  <button className="btn bg-info-subtle text-body-secondary">
                    See Details
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className="btn bg-danger-subtle text-body-secondary"
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
