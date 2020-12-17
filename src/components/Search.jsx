import React, { useEffect, useState } from 'react';

const Search = (props) => {
  // const [restaurantes, setrestaurantes] = useState(data);
  function handleInputs() {
    props.change.change();
    props.change.filter();
  }
  function ratingInput() {
    props.change.filterR();
  }
  function updateList() {
    props.change.update();
  }

  return (
    <form className='border-gray-100 p-2 flex items-center font-body'>
      <div className='barra'></div>
      <div className='flex w-full '>
        <select
          className='bg-transparent w-16 text-xs '
          name='select '
          id='select'
          onChange={ratingInput}>
          <option className=' ' value=''>
            Rating
          </option>
          <option value='1'>♡</option>
          <option value='2'>♡♡</option>
          <option value='3'>♡♡♡</option>
          <option value='4'>♡♡♡♡</option>
          <option value='5'>♡♡♡♡♡</option>
        </select>
        <input
          className='bg-transparent w-full pr-5 pl-5 text-fontT outline-none text-xs'
          name='restaurant'
          id='filter'
          placeholder='Name, City'
          onChange={handleInputs}
        />
        <div className='barra'></div>
        <span
          className='material-icons text-primary lupa relative cursor-pointer'
          onClick={updateList}>
          search
        </span>
      </div>
    </form>
  );
};

export default Search;
