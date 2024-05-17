import React, { useState, useEffect } from 'react';
import './Search.css';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../Slices/SearchQuerySlice';
import { useCont } from '../../Context/Context';

export const Search = () => {
  const dispatch = useDispatch();
  const [SearchTerm, setSearchTerm] = useState('');
  const{setFilterApplied,setSearchApplied}=useCont()


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if(event.target.value==='')
      {
        // setFilterApplied(false)
        setSearchApplied(false)
        dispatch(setSearchQuery(''))
        setSearchTerm('')
      }
  };

  const SubmitSearch = (e) => {
    e.preventDefault();
    console.log(SearchTerm)
    dispatch(setSearchQuery(SearchTerm))
    setSearchApplied(true)
    // setFilterApplied(true)
  };

  useEffect(() => {
    console.log(SearchTerm);
  }, [SearchTerm]);

  return (
    <form action="#" className="search" onSubmit={SubmitSearch}>
      <div className="input-group">
        <input
          id="search"
          name="search"
          type="text"
          onChange={handleInputChange}
          value={SearchTerm}
          className="form-control"
          placeholder="Search For Products Brands And More"
          required
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn btn-primary text-white"
          type="submit"
          aria-label="Search"
          // onClick={Submit}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
