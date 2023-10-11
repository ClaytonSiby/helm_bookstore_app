import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Book, updateBook } from '../../features/book/bookSlice'

export interface UpdateBookProps {
  bookId: string
}

const UpdateBook = ({ bookId }: UpdateBookProps) => {
  const dispatch = useAppDispatch()
  const book = useAppSelector(
    (state) =>
      state.books.booksData.filter((book: Book) => book.id === bookId)[0]
  )

  const [formData, setFormData] = useState<Book>({
    id: bookId,
    title: book.title,
    author: book.author,
    categories: [...book.categories],
    description: book.description,
    created_at: book.created_at,
    updated_at: book.updated_at,
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target

    if (name === 'categories') {
      const selectedOptions = Array.from(
        (e.target as HTMLSelectElement).selectedOptions
      ).map((option) => option.value)

      setFormData({
        ...formData,
        [name]: selectedOptions,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleUpdateBook = () => {
    console.log(formData)
    dispatch(updateBook(formData))
  }

  return (
    <form className="d-flex mt-3">
      <div className="row">
        <div className="col col-md-6 form-group my-2">
          <input
            type="text"
            className="form-control"
            placeholder="Book Title"
            aria-label="Book Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="col col-md-6 form-group my-2">
          <input
            type="text"
            className="form-control"
            placeholder="Author Name"
            aria-label="Author Name"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group my-2">
          <select
            className="form-select"
            id="inlineFormSelectPref"
            name="categories"
            value={formData.categories}
            onChange={handleInputChange}
            multiple={true}
          >
            <option value="" defaultValue="" className="text-secondary">
              Select Category
            </option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="7398f11c-0633-4996-9651-6b05ac47d63f">
              Psychology
            </option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
        <div className="form-group my-2">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="floatingTextarea" className="text-secondary">
              Details
            </label>
          </div>
        </div>
        <div className="form-group my-2">
          <button
            type="button"
            className="btn bg-info text-secondary"
            onClick={handleUpdateBook}
          >
            Update Book
          </button>
        </div>
      </div>
    </form>
  )
}

export default UpdateBook
