import React from 'react';

const Categories = ({ children, title }) => {
  return (
    <section>
      <h2 className='font-Montserrat font-bold text-lg text-fontT ml-4 mb-5'>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Categories;
