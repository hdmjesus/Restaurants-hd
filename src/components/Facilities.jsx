import React from 'react';

const Facilities = (props) => {
  return (
    <section className='mb-5'>
      <h3 className=' text-fontT mb-3 mt-8 font-bold font-Montserrat'>
        Facilidades
      </h3>
      <article>
        <div className='flex mb-3'>
          <span>
            <span className='material-icons'>wifi</span>
          </span>
          <span className='ml-3'>Wifi</span>
        </div>
        <div className='flex mb-3'>
          <span>
            <span className='material-icons'>local_parking</span>
          </span>
          <span className='ml-3'>Valet Parking</span>
        </div>
        <div className='flex'>
          <span>
            <span className='material-icons'>payments</span>
          </span>
          <span className='ml-3'>Tarjeta de credito</span>
        </div>
      </article>
    </section>
  );
};

export default Facilities;
