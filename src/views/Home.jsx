import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';
import RestaurantItem from '../components/RestaurantItem';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Categories title='Populares'>
        <Restaurants>
          <RestaurantItem />
        </Restaurants>
      </Categories>
      <Footer />
    </>
  );
};

export default Home;
