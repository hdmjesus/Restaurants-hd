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

  return (
    <div className='restaurant font-body mb-10 w-80 m-auto'>
      <Link to={`/restaurant/${id}`}>
        {' '}
        <figure className='restaurant__figure h-56 '>
          <img className='w-full rounded-md  h-56' src={thumb} alt={name} />
        </figure>
      </Link>

      <div className='description flex justify-between mt-3'>
        <div className='flex justify-center items-center'>
          <Votes votes={user_rating.votes} />
          <div className='ml-3'>
            <span className='text-xs text-fontB md:text-sm'>
              {location.city}
            </span>
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
          <button className='rounded bg-primary w-16 text-xs md:text-sm mt-2 md:py-1 md:px-2 md:w-20 text-white font-bold hover:bg-red-600'>
            <Link to={`/restaurant/${id}`}>Ver Mas</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
