import React, { useEffect, useState } from 'react';
import { FaRegSmileWink, FaCheck } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import StartRating from './StartRating';

const Modal = (props) => {
  const [ratingSend, setRatingSend] = useState(false);
  console.log(ratingSend);
  return (
    <article className='modal'>
      <div className='modal__main '>
        {!ratingSend && (
          <div className='enviar flex flex-col items-center justify-center'>
            <div className='icon-enviar'>
              <FaRegSmileWink size={50} color={'#ffc107'} className='mb-3' />
            </div>
            <h2>Tu opinion es importante</h2>
            <StartRating />
            <button
              className='py-2 px-3 bg-primary text-white rounded mt-4'
              onClick={() => setRatingSend(true)}>
              Enviar
            </button>
          </div>
        )}
        {ratingSend && (
          <div className='thanks flex flex-col items-center'>
            <div className='icon-tranks'>
              <FaCheck size={50} color={'#93e666'} className='mb-4' />
            </div>
            <p>Gracias</p>
            <button
              className='py-2 px-3 bg-primary text-white rounded mt-4'
              onClick={() => props.closeModal()}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Modal;
