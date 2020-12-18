import React from 'react';

const Restaurants = ({ children }) => {
  return (
    <article className='m-auto w-10/12 xsm:w-9/12 md:w-8/12 lg:w-10/12 lg:flex lg:flex-wrap xl:w-11/12 '>
      {children}
    </article>
  );
};

export default Restaurants;
