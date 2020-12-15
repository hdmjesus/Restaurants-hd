import React from 'react';

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
    <div className='font-body mb-10'>
      <figure className='w-80'>
        <img className='w-full rounded-md' src={thumb} alt={name} />
      </figure>
      <div className='description flex justify-between mt-3'>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center text-xs font-bold font-title border py-1 px-2 mr-10 rounded-full border-fontB'>
            <span className='material-icons text-base'>mood</span>
            <span className='material-icons text-base fa-align-center mr-2'>
              mood_bad
            </span>
            <span className='text-xs text-fontB'>{user_rating.votes}</span>
          </div>
          <div>
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
      <h2 className='text-sm text-fontT font-title font-bold mt-2'>{name}</h2>
    </div>
  );
};

export default RestaurantItem;
