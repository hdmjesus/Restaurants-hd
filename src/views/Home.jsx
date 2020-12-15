import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';
import RestaurantItem from '../components/RestaurantItem';
import Footer from '../components/Footer';

const Home = () => {
  const data = [
    {
      id: 1312,
      name: 'shown',
      location: {
        address: '7 Hanover StreetLawndale, CA 90260',
        city: 'Vatican City',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050147/restaurantes-hd/pexels-huy-phan-1383776_woe9yk.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '3.7',
        rating_text: 'Regular',
        rating_color: '5BA829',
        votes: '3902',
      },
    },
    {
      id: 1620,
      name: 'Mass',
      location: {
        address: '9419 North Elm RoadFort Washington, MD 20744',
        city: 'Barbados',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050147/restaurantes-hd/pexels-asad-photo-maldives-1449773_ohjtji.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '2.4',
        rating_text: 'Bad',
        rating_color: '5BA829',
        votes: '2188',
      },
    },
    {
      id: 1548,
      name: 'Pattern',
      location: {
        address: '625 E. 53rd StreetPearl, MS 39208',
        city: 'Turkmenistan',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050146/restaurantes-hd/pexels-igor-starkov-1307698_pahclw.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '3.6',
        rating_text: 'Good',
        rating_color: '5BA829',
        votes: '2941',
      },
    },
    {
      id: 1254,
      name: 'Prices',
      location: {
        address: '7950 Bedford Ave.Staten Island, NY 10301',
        city: 'Slovenia',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050146/restaurantes-hd/pexels-pixabay-460537_dq6fzq.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '4.5',
        rating_text: 'Very Good',
        rating_color: '5BA829',
        votes: '2422',
      },
    },
    {
      id: 1495,
      name: 'Gentle',
      location: {
        address: '515 South Bridgeton LaneOcoee, FL 34761',
        city: 'Bahamas',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050146/restaurantes-hd/pexels-lawrence-suzara-1581554_yow1io.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '3.0',
        rating_text: ' Good',
        rating_color: '5BA829',
        votes: '2375',
      },
    },
    {
      id: 1324,
      name: 'Eat',
      location: {
        address: '15 River CircleColorado Springs, CO 80911',
        city: 'Guernsey',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050145/restaurantes-hd/pexels-marcus-herzberg-1058277_jzxg2v.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '2.8',
        rating_text: 'Regular',
        rating_color: '5BA829',
        votes: '2136',
      },
    },
    {
      id: 1540,
      name: 'Ill',
      location: {
        address: '150 Sherwood StreetHolbrook, NY 11741',
        city: 'Falkland Islands',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050145/restaurantes-hd/pexels-kaboompics-com-6267_fhkpds.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '4.9',
        rating_text: 'Very Good',
        rating_color: '5BA829',
        votes: '2593',
      },
    },
    {
      id: 1474,
      name: 'Ball-Food',
      location: {
        address: '642 Catherine Rd.Brockton, MA 02301',
        city: 'Turkey',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050145/restaurantes-hd/pexels-pixabay-260922_zalqdp.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '4.3',
        rating_text: 'Very Good',
        rating_color: '5BA829',
        votes: '3176',
      },
    },
    {
      id: 1287,
      name: 'Unknown',
      location: {
        address: '9105 Sugar DrivePlymouth, MA 02360',
        city: 'Tajikistan',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050145/restaurantes-hd/pexels-vedanti-239975_tfn4bs.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '2.9',
        rating_text: 'Bad',
        rating_color: '5BA829',
        votes: '2842',
      },
    },
    {
      id: 1298,
      name: 'Exercise',
      location: {
        address: '105 4th LaneKennesaw, GA 30144',
        city: 'Turkey',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050145/restaurantes-hd/pexels-naim-benjelloun-2290753_nox0sn.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '4.5',
        rating_text: 'Very Good',
        rating_color: '5BA829',
        votes: '3645',
      },
    },
    {
      id: 1071,
      name: 'Meet',
      location: {
        address: '9996 Somerset DriveNiceville, FL 32578',
        city: 'Tonga',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050145/restaurantes-hd/pexels-chan-walrus-941861_qmlcjl.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '3.8',
        rating_text: ' Good',
        rating_color: '5BA829',
        votes: '3857',
      },
    },
    {
      id: 1109,
      name: 'Firm',
      location: {
        address: '8486 Walt Whitman DriveMelrose, MA 02176',
        city: 'Aruba',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050144/restaurantes-hd/pexels-pixabay-262047_tpkugq.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '3.',
        rating_text: ' Good',
        rating_color: '5BA829',
        votes: '2965',
      },
    },
    {
      id: 1248,
      name: 'Amount',
      location: {
        address: '9993 53rd DriveMechanicsburg, PA 17050',
        city: 'Costa Rica',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050144/restaurantes-hd/pexels-tom-balabaud-1579739_1_vhk5wx.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '2.3',
        rating_text: 'Bad',
        rating_color: '5BA829',
        votes: '3731',
      },
    },
    {
      id: 1562,
      name: 'Every',
      location: {
        address: '914 Southampton DriveWinona, MN 55987',
        city: 'Lithuania',
      },
      phone_numbers: '(212) 228-2930',
      average_cost_for_two: '60',
      price_range: '2',
      currency: '$',
      thumb:
        'https://res.cloudinary.com/dzp98wbza/image/upload/v1608050144/restaurantes-hd/pexels-negative-space-34650_qr20so.webp',
      featured_image: '',
      user_rating: {
        aggregate_rating: '4.8',
        rating_text: 'Very Good',
        rating_color: '5BA829',
        votes: '3668',
      },
    },
  ];

  async function getData() {
    const URLDAYS = `https://developers.zomato.com/api/v2.1/restaurant?user-key=48e76c5182b0f1f17564bbaba9395a79`;
    let response = await fetch(URLDAYS);
    let data = await response.json();
    setData(data);
  }

  useEffect(() => {
    console.log(data);
  }, []);
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
