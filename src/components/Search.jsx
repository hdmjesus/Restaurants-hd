import React from 'react';

const Search = () => {
  return (
    <form className='border-gray-100 p-2 flex items-center font-body'>
      <div className='barra'></div>
      <div className='flex w-full'>
        <input
          className='bg-transparent w-full pr-5 pl-5 text-fontT outline-none'
          name='restaurant'
          id='city'
          placeholder='Add restaurant'
        />
        <div className='barra'></div>
        <span className='material-icons text-primary lupa relative'>
          search
        </span>
      </div>
    </form>
  );
};

export default Search;
