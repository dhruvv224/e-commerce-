import React from 'react'

export const FilterBy = () => {
  return (
    <div className='card mb-3'>
        <div className='card-body fw-bold text-uppercase'>
            Filter By {""}
       
        <button type='reset' className='btn btn-sm btn-light'>
            <span aria-hidden='true'>&times;</span>Clear All
        </button>
        </div>
    </div>
  )
}
export default FilterBy