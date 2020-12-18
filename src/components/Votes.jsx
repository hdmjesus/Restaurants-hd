import React from 'react';
const Votes = (props) => {
  return (
    <div className='flex md:m-auto   w-20 justify-center items-center text-xs font-bold font-title border py-1 px-2  rounded-full border-fontB'>
      <span className='material-icons text-base'>mood</span>
      <span className='material-icons text-base fa-align-center mr-2'>
        mood_bad
      </span>
      <span className='text-xs text-fontB'>{props.votes}</span>
    </div>
  );
};

export default Votes;
