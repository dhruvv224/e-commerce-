import React, { useEffect, useState } from 'react'

export const SIzeFilter = () => {
    const[SizeInputs,setSizeInputs]=useState([])

    const Sizeonchage=(event)=>{
        const value=event.target.value
        if(event.target.checked)
        {
            setSizeInputs([...SizeInputs,value])

        }
        else
        {
            setSizeInputs(SizeInputs.filter(item=>item!==value))

        }
     
        

    }
    useEffect(()=>{
        console.log(SizeInputs)
    },[SizeInputs])
  return (
    <div className='card mb-3'>
        <div className='card-header fw-bold text-uppercase accordian-icon-button'
        data-bs-toggle='collapse'
        data-bs-target='#filtersize'
        aria-expanded='true'
        aria-controls='filtersize'
        >Size</div>
        <ul className='list-group list-group-flush show' id='filtersize'>
            <li className='list-group-item'>
        <div className='row g-0'>
                <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize1"
                value='S'
                onChange={Sizeonchage}
              />
              <label className="form-check-label" htmlFor="flexCheckSize1">
                S
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize1"
                value='M'
                onChange={Sizeonchage}
              />
              <label className="form-check-label" htmlFor="flexCheckSize1">
                M
              </label>
            </div>
           
           
                </div>
            </li>
            <li className='list-group-item'>
        <div className='row g-0'>
                <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize1"
                value='L'
                onChange={Sizeonchage}
              />
              <label className="form-check-label" htmlFor="flexCheckSize1">
                L
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize1"
                value='XL'
                onChange={Sizeonchage}
              />
              <label className="form-check-label" htmlFor="flexCheckSize1">
                XL
              </label>
            </div>
           
           
                </div>
            </li>
            <li className='list-group-item'>
        <div className='row g-0'>
                <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize1"
                value='XXL'
                onChange={Sizeonchage}
              />
              <label className="form-check-label" htmlFor="flexCheckSize1">
                XXL
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize1"
                value='XXX'
                onChange={Sizeonchage}
              />
              <label className="form-check-label" htmlFor="flexCheckSize1">
                XXXL
              </label>
            </div>
           
           
                </div>
            </li>
        </ul>
    </div>
  )
}
export default SIzeFilter