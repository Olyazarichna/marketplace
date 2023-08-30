'use client'
import React, { useState, useEffect } from 'react';
import '../scss/main.scss';
import { Open_Sans } from 'next/font/google';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import ChooseCityModal from './components/ChooseCityModal/ChooseCityModal';
import getCity from './services/getCity';

const img1 = require('../../public/images/aboutUs1x.jpg');
const img2 = require('../../public/images/girls.jpg');
const img3 = require('../../public/images/group.jpg');

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showNextModal, setShowNextModal] = useState(false);
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
    const fetchData = async () => {
      try {
        const data = await getCity();
        console.log('data', data);
        setCity(data.city || ''); // Ensure city is not null
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const products = [
    // Your product data here...
  ];

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
    setShowNextModal(!showNextModal);
  };

  const closeCitiesModal = () => {
    setShowNextModal(!showNextModal);
  };

  const chooseCity = () => {
    alert('choose city');
  };

  return (
    <>
      {city !== null && <Header city={city} />}
      <main>
        {/* Your main content here... */}
      </main>
      <Footer />
      {showModal && (
        <Backdrop>
          <WelcomeModal
            closeModal={handleModalToggle}
            handleBtnYes={handleModalToggle}
            handleBtnNo={openModal}
            city={city} // Assuming city is of type string | null
          />
        </Backdrop>
      )}
      {showNextModal && (
        <Backdrop>
          <ChooseCityModal closeCitiesModal={closeCitiesModal} chooseCity={chooseCity} />
        </Backdrop>
      )}
    </>
  );
}

