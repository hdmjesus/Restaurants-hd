import React from 'react';

const AdditionalFeatures = ({ children }) => {
  return (
    <>
      <hr className='w-3/4 m-auto mt-6 bg-fontT'></hr>
      <section className='w-10/12 m-auto mt-5 md:flex md:w-11/12'>
        {children}
      </section>
    </>
  );
};

export default AdditionalFeatures;
