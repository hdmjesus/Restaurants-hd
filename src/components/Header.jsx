import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className='flex flex-col  justify-between'>
      <Link to='/'>
        <figure className='w-full fixed left-0 right-0 top-0 bg-second'>
          <div className='p-4'>
            <span className='material-icons text-primary text-3xl'>
              restaurant
            </span>
            <p className='ml-2 text-primary font-Montserrat font-bold inline-block text-xl '>
              Hot Knife
            </p>
          </div>
        </figure>
      </Link>
      {!props.isDetail && (
        <nav className=' nav min-w-1/4  m-auto max-w-xs'>
          <Search change={props}></Search>
        </nav>
      )}
    </header>
  );
};

export default Header;
