import React, { useEffect, useState } from 'react';
import Votes from '../components/Votes';
import Modal from '../components/Modal';
const RestaurantDetails = (props) => {
  const [modalActive, setModalActive] = useState(false);
  function closeModal() {
    setModalActive(false);
  }
  return (
    <section className='w-10/12 m-auto flex justify-between md:w-7/12'>
      <article className='description '>
        <h2 className='text-2xl md:text-3xl text-fontT mb-3 mt-8 font-bold font-Montserrat'>
          {props.name}
        </h2>
        <ul className='font-Mulish text-sm md:text-base text-fontT'>
          <li className=' text-xs py-1 block md:text-base'>
            <span className='material-icons '>home</span>{' '}
            <span className='underline'>{props.address}</span>
          </li>
          <li className='py-1'>
            <span className='material-icons'>phone</span>{' '}
            <span className=''>{props.phoneNumber}</span>
          </li>
          <li className='py-1'>
            <span className='material-icons'>location_city</span>{' '}
            <span>{props.city}</span>
          </li>
        </ul>
      </article>
      <article className='raiting mt-8 md:w-1/3  md:flex-col text-center'>
        <div className='w-11/12 m-auto text-center '>
          <h3 className='text-fontT md:text-lg  font-bold font-Montserrat'>
            Rating
          </h3>
          <div className='my-2 '>
            <span className='material-icons text-sm md:text-base'>
              favorite
            </span>
            <span className='material-icons text-sm md:text-base'>
              favorite
            </span>
            <span className='material-icons text-sm md:text-base'>
              favorite
            </span>
            <span className='material-icons text-sm md:text-base'>
              favorite
            </span>
            <span className='material-icons text-sm md:text-base'>
              favorite
            </span>
          </div>

          <Votes votes={props.votes} />
        </div>
        <button
          className='font-Mulish mt-3 bg-primary rounded text-white text-sm py-1 px-2 md:text-base '
          onClick={() => setModalActive(true)}>
          Calificanos
        </button>
      </article>
      {modalActive && <Modal closeModal={closeModal}></Modal>}
    </section>
  );
};

export default RestaurantDetails;
