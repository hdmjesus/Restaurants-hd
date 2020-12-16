import React from 'react';
import Search from '../components/Search';
const Header = (props) => {
  return (
    <header className='flex flex-col p-4 justify-between'>
      <figure className='w-full '>
        <span className='material-icons text-primary text-3xl'>restaurant</span>
        <p className='ml-2 text-primary font-Montserrat font-bold inline-block text-xl '>
          Hot Knife
        </p>
      </figure>
      <nav className='min-w-1/4 mt-6 m-auto max-w-xs'>
        <Search change={props}></Search>
      </nav>
    </header>
  );
};

export default Header;
