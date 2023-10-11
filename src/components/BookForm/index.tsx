import React from 'react'

const BookForm = () => {
  return (
    <form className="d-flex mt-3">
      <div className="row">
        <div className="col col-md-6 form-group my-2">
          <input
            type="text"
            className="form-control"
            placeholder="book title"
            aria-label="book title"
          />
        </div>
        <div className="col col-md-6 form-group my-2">
          <input
            type="text"
            className="form-control"
            placeholder="author name"
            aria-label="author name"
          />
        </div>
        <div className="form-group my-2">
          <select className="form-select" id="inlineFormSelectPref" name="book">
            <option value="" disabled selected hidden>
              Select Category
            </option>
            <option value="1">Sci-fi</option>
            <option value="2">Psychology</option>
            <option value="3">Fantasy</option>
          </select>
        </div>
        <div className="form-group my-2">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea">book details</label>
          </div>
        </div>
      </div>
    </form>
  )
}

export default BookForm
