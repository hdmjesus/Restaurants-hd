import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../components/Votes';
const RestaurantItem = (props) => {
  const {
    verage_cost_for_two,
    currency,
    id,
    location,
    name,
    phone_numbers,
    price_range,
    thumb,
    user_rating,
  } = props;
  function culo() {
    console.log('ola');
  }

  return (
    <div className='font-body mb-10'>
      <Link to={`/restaurant/${id}`}>
        {' '}
        <figure className='w-80 h-56' onClick={culo}>
          <img className='w-full rounded-md  h-56' src={thumb} alt={name} />
        </figure>
      </Link>

      <div className='description flex justify-between mt-3'>
        <div className='flex justify-center items-center'>
          <Votes votes={user_rating.votes} />
          <div className='ml-3'>
            <span className='text-xs text-fontB'>{location.city}</span>
          </div>
        </div>
        <div className='flex justify-center items-center mr-4'>
          <span className='material-icons text-primary text-base'>
            favorite
          </span>{' '}
          <span className='text-sm text-fontT ml-1'>
            {user_rating.aggregate_rating}
          </span>
        </div>
      </div>
      <div className='flex justify-between mr-5 '>
        <h2 className='text-sm text-fontT font-title font-bold mt-2'>{name}</h2>
        <div className='actions'>
          <button
            onClick={culo}
            className='rounded bg-primary w-16 text-xs mt-2 text-white font-bold hover:bg-red-600'>
            <Link to={`/restaurant/${id}`}>Ver Mas</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
