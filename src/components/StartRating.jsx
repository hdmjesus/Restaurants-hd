import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const StartRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='flex'>
      {[...Array(5)].map((start, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className='star'
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e3e5e9'}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StartRating;
