import React from 'react';

const Thumb = (props) => {
  return (
    <figure className='thumb mt-16 '>
      <img
        className=' lg:mt-3 lg:ml-8 '
        src={props.img}
        alt='Imagen del Restaurante'
      />
    </figure>
  );
};

export default Thumb;
