import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-info-subtle fixed-bottom border-top text-body-tertiary py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <small>&copy; 2023 Helm BookLibrary. All rights reserved.</small>
          </div>
          <div>
            <small>&#x1F375;</small>
          </div>
          <div>
            <small>
              Designed and developed by{' '}
              <span className="text-info">Clayton Siby</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
