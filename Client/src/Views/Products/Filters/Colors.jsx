
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedColor } from '../../../Slices/ColorFilter'
export const Colors = ({FilterApplied,setFilterApplied}) => {
  const[selectedInputs,setSelectedInputs]=useState([])
  const dispatch=useDispatch()
  const handleCheckboxChange=(event)=>{
    const value=event.target.value
    if(event.target.checked)
      {
        setSelectedInputs([...selectedInputs,value])
        dispatch(setSelectedColor([...selectedInputs,value]))
       setFilterApplied(true)
      }
      else{
        setSelectedInputs(selectedInputs.filter(item=>item!==value))
        dispatch(setSelectedColor(selectedInputs.filter(item=>item!==value)))
        setFilterApplied(false)
      }
      console.log("Colors are",selectedInputs)

  }
  useEffect(()=>{
    console.log(selectedInputs)
  
  },[selectedInputs])
  return (
    <div>
        <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterColor"
        aria-expanded="true"
        aria-controls="filterColor"
      >
        Color
      </div>
      <ul className="list-group list-group-flush show" id="filterColor">
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-primary"
                type="checkbox"
                id="flexCheckColor1"
                value="Blue"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckColor1">
                Blue <span className="text-muted">(5)</span>
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input bg-secondary"
                type="checkbox"
                id="flexCheckColor2"
                value='Grey'
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckColor2">
                Gray <span className="text-muted">(8)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-success"
                type="checkbox"
                id="flexCheckColor3"
                value='Green'
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckColor3">
                Green <span className="text-muted">(12)</span>
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input bg-danger"
                type="checkbox"
                id="flexCheckColor4"
                value='Red'
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckColor4">
                Red <span className="text-muted">(15)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-warning"
                type="checkbox"
                id="flexCheckColor5"
                value='Yellow'
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckColor5">
                Yellow <span className="text-muted">(6)</span>
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input bg-info"
                type="checkbox"
                onChange={handleCheckboxChange}
                value='Cyan Blue'

                id="flexCheckColor6"
              />
              <label className="form-check-label" htmlFor="flexCheckColor6">
                Cyan Blue <span className="text-muted">(2)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-light"
                type="checkbox"
                id="flexCheckColor7"
                value='Light'
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckColor7">
                Light <span className="text-muted">(3)</span>
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input bg-dark"
                type="checkbox"
                value='Dark'
                onChange={handleCheckboxChange}
                id="flexCheckColor8"
              />
              <label className="form-check-label" htmlFor="flexCheckColor8">
                Dark <span className="text-muted">(7)</span>
              </label>
            </div>
          </div>
        </li>
      </ul>
    </div>
    </div>
  )
}
export default Colors;