'use client';
import '../scss/main.scss';
import AboutUs from './components/AboutUs/AboutUs';
import ProductList from './components/ProductList/ProductList';
import img1 from '../../public/images/aboutUs1x.jpg';
import img2 from '../../public/images/girls.jpg';
import img3 from '../../public/images/group.jpg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import Backdrop from './components/Backdrop/Backdrop.jsx';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import ChooseCityModal from './components/ChooseCityModal/ChooseCityModal.jsx';
import getCity from './services/getCity';

const products = [
  {
    img: img1,
    id: '123',
    title: 'Вуличний театр для дітей',
    date: '2023-07-30',
    location: 'Some Location 1',
    time: '15:00',
  },
  {
    img: img2,
    id: '1237',
    title: 'Благодійний музичний вечір органної музики',
    date: '2023-07-30',
    location: 'Some Location 1',
    time: '15:00',
  },
  {
    img: img3,
    id: '1235',
    title: 'Онлайн майтсер-класи для дітей та дорослих',
    date: '2023-07-30',
    location: 'Some Location 1',
    time: '15:00',
  },
  {
    img: img1,
    id: '1234545',
    title: 'Онлайн майтсер-класи для дітей та дорослих',
    date: '2023-07-30',
    location: 'Some Location 1',
    time: '15:00',
  },
  {
    img: img1,
    id: '123422',
    title: 'Онлайн майтсер-класи для дітей та дорослих',
    date: '2023-07-30',
    location: 'Some Location 1',
    time: '15:00',
  },
  {
    img: img1,
    id: '123884',
    title: 'Онлайн майтсер-класи для дітей та дорослих',
    date: '2023-07-30',
    location: 'Some Location 1',
    time: '15:00',
  },
];

export default function Home() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [city, setCity] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeModal(true);
    }, 3000);
    const fetchData = async () => {
      try {
        const data = await getCity();
        console.log('data', data);
        setCity(data.city);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleModalToggle = () => {
    setShowWelcomeModal(!showWelcomeModal);
  };

  const openCityModal = () => {
    setShowWelcomeModal(!showWelcomeModal);
    setShowCityModal(!showCityModal);
  };

  const closeCitiesModal = () => {
    setShowCityModal(!showCityModal);
  };

  const chooseCity = selectedCity => {
    console.log(`Обране місто: ${selectedCity}`);
    setCity(selectedCity);
    setShowCityModal(!showCityModal);
    //отримати події у selectedCity
  };

  return (
    <>
      <Header city={city} setCity={setCity} />
      <main>
        <AboutUs />
        <ProductList title="Події у Києві" products={products} />
        <ProductList title="Активний відпочинок в Києві" products={products} />
        <ProductList title="Популярні хобі" products={products} />
        <ProductList title="Курси в Києві" products={products} />
        <ProductList title="Курси онлайн" products={products} />
      </main>
      <Footer />
      {showWelcomeModal && (
        <Backdrop>
          <WelcomeModal
            closeModal={handleModalToggle}
            handleBtnYes={handleModalToggle}
            handleBtnNo={openCityModal}
            city={city}
          />
        </Backdrop>
      )}
      {showCityModal && (
        <Backdrop>
          <ChooseCityModal closeCitiesModal={closeCitiesModal} chooseCity={chooseCity} />
        </Backdrop>
      )}
    </>
  );
}
