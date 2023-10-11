import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Book, addBook } from '../../features/book/bookSlice'
import { Category } from '../../features/category/categorySlice'

const CreateBook = () => {
  const [formData, setFormData] = useState<Book>({
    id: '',
    title: '',
    author: '',
    categories: [],
    description: '',
    created_at: '',
    updated_at: '',
  })
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.categories.categoriesData)

  const distinctCategories = categories.filter(
    (category: Category, index: number, self: Category[]) =>
      index === self.findIndex((t: Category) => t.id === category.id)
  )

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)

    try {
      dispatch(addBook(formData))
      setFormData({
        id: '',
        title: '',
        author: '',
        categories: [],
        description: '',
        created_at: '',
        updated_at: '',
      })

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

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

  return (
    <form className="d-flex mt-3" onSubmit={handleFormSubmit}>
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
            {distinctCategories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
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
              details
            </label>
          </div>
        </div>
        <div className="form-group my-2">
          <button type="submit" className="btn bg-info text-secondary">
            Create Book
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreateBook
