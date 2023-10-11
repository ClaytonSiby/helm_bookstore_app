import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { deleteBook } from '../../features/book/bookSlice'

interface BookProps {
  bookId: string
  bookTitle: string
  bookAuthor: string
  bookCategory: string
  bookUpdatedAt: string
}

const Book: React.FC<BookProps> = ({
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
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{bookTitle}</h5>
            <p className="card-text">
              <small className="text-body-secondary">{bookAuthor}</small>
            </p>
            <p>Category: {bookCategory}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated: {bookUpdatedAt}
              </small>
            </p>
            <div className="row">
              <div className="col-6">
                <button>See Details</button>
              </div>
              <div className="col-6">
                <button onClick={handleDeleteBook}>Delete Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
