import React from 'react';

const Thumb = (props) => {
  return (
    <figure className='mt-16'>
      <img src={props.img} alt='Imagen del Restaurante' />
    </figure>
  );
};

export default Thumb;
