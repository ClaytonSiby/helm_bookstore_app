import React from 'react'
import UpdateBook, { UpdateBookProps } from './UpdateBook'

const UpdateBookModal = ({ bookId }: UpdateBookProps) => {
  return (
    <div>
      <button
        type="button"
        className="btn bg-info-subtle"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropEdit"
      >
        See Details
      </button>

      <div
        className="modal fade"
        id="staticBackdropEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-info-subtle">
            <div className="modal-header border-bottom border-info">
              <h1
                className="modal-title fs-5 text-body-tertiary"
                id="staticBackdropLabel"
              >
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
              <UpdateBook bookId={bookId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateBookModal
