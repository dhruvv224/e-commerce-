import React, { useState, useEffect } from 'react';

export const FilterPrice = () => {
  const [selectedInputs, setSelectedInputs] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedInputs([...selectedInputs, value]);
    } else {
      setSelectedInputs(selectedInputs.filter(item => item !== value));
    }
  };

  useEffect(() => {
    console.log(selectedInputs);
  }, [selectedInputs]); // Log selectedInputs whenever it changes

  return (
    <div>
      <div className='card mb-3'>
        <div
          className='card-header fw-bold text-uppercase accordian-icon-button'
          data-bs-toggle="collapse"
          data-bs-target="#filterprice"
          aria-expanded='true'
          aria-controls='filterprice'
        >
          Price
        </div>
        <ul className='list-group list-group-flush show' id='filterprice'>
          <li className='list-group-item'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='flexCheckDefault1'
                value='199₹-299₹'
                onChange={handleCheckboxChange}
              />
              <label className='form-check-label' htmlFor='flexCheckDefault1'>
                199₹ - 299₹
              </label>
            </div>
          </li>
          <li className='list-group-item'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='flexCheckDefault2'
                value='399₹-599₹'
                onChange={handleCheckboxChange}
              />
              <label className='form-check-label' htmlFor='flexCheckDefault2'>
                399₹ - 599₹
              </label>
            </div>
          </li>
          <li className='list-group-item'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='flexCheckDefault3'
                value='599₹-999₹'
                onChange={handleCheckboxChange}
              />
              <label className='form-check-label' htmlFor='flexCheckDefault3'>
                599₹ - 999₹ +
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPrice;
