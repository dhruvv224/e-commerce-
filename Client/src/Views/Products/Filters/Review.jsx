import React from 'react'

export const Review = () => {
  return (
    <div className='card mb-3'>
        <div className='card-header fw-bold text-uppercase accordian-icon-button'
         data-bs-toggle="collapse"
         data-bs-target="#filterStar"
         aria-expanded="true"
         aria-controls="filterStar">
            Customer Review
         </div>
         <div className='card-body show' id='filterStar'>
            <div className='form-check'>
                <input className='form-check-input' type='radio'  name="flexRadioDefault"
            id="flexRadioDefault5" />
            <label className='form-check-label' htmlFor='flexRadioDefalut5' aria-label='star'>
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />

            </label>
            </div>
            <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
        
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault4"
            aria-label="Star"
          >
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault4"
            aria-label="Star"
          >
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault4"
            aria-label="Star"
          >
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault4"
            aria-label="Star"
          >
            <i className="bi bi-star-fill text-warning me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
            <i className="bi bi-star-fill text-secondary me-1 mb-2" />
          </label>
        </div>
        
         </div>
    </div>
  )
}
export default Review