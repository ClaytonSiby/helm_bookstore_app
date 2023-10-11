import React from 'react'
import BookForm from '../BookForm'

const BookModal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn bg-info"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add New book
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-info-subtle">
            <div className="modal-header border-bottom border-info">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Book Information
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <BookForm />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Discard
              </button>
              <button type="button" className="btn btn-success">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookModal
