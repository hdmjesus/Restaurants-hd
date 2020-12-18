import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className='flex flex-col  justify-between lg:flex-row  '>
      <Link to='/'>
        <figure className='w-full  fixed left-0 right-0 top-0 bg-second lg:ml-16'>
          <div className='p-4 lg:w-1/2'>
            <span className='material-icons text-primary text-3xl'>
              restaurant
            </span>
            <p className='ml-2 text-primary font-Montserrat font-bold inline-block text-xl md:text-2xl '>
              Hot Knife
            </p>
          </div>
        </figure>
      </Link>
      {!props.isDetail && (
        <nav className=' nav min-w-1/4 lg:w-1/3 m-auto lg:m-0 max-w-xs lg:fixed lg:right-0 lg:mr-20 lg:mt-4'>
          <Search change={props}></Search>
        </nav>
      )}
    </header>
  );
};

export default Header;
