import React from 'react';

const Categories = ({ children, title }) => {
  return (
    <section className='categories'>
      <h2 className='font-Montserrat font-bold text-lg text-fontT ml-4 mb-5 md:ml-10 md:text-xl'>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Categories;
