'use client';
import '../scss/main.scss';
import AboutUs from './components/AboutUs/AboutUs';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import Backdrop from './components/Backdrop/Backdrop';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import ChooseCityModal from './components/ChooseCityModal/ChooseCityModal';
// import getAllActivities from "./services/getAllActivities";
import getCity from './services/getCity';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showNextModal, setShowNextModal] = useState(false);
  // const [activities, setActivities] = useState([]);
  const [city, setCity] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getAllActivities();
  //       console.log('a', data);
  //       setActivities(data);
  //       console.log(activities);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [activities]);
 
  const products = [
    {
      img: '../../public/images/aboutUs1x.jpg',
      id: '123',
      title: 'Вуличний театр для дітей',
      date: '2023-07-30',
      location: 'Some Location 1',
      time: '15:00',
    },
    {
      img: '../../public/images/girls.jpg',
      id: '237',
      title: 'Благодійний музичний вечір органної музики',
      date: '2023-07-30',
      location: 'Some Location 1',
      time: '15:00',
    },
    {
      img: '../../public/images/group.jpg',
      id: '1235',
      title: 'Онлайн майтсер-класи для дітей та дорослих',
      date: '2023-07-30',
      location: 'Some Location 1',
      time: '15:00',
    },
    {
      img: '../../public/images/aboutUs1x.jpg',
      id: '1234545',
      title: 'Онлайн майтсер-класи для дітей та дорослих',
      date: '2023-07-30',
      location: 'Some Location 1',
      time: '15:00',
    },
    {
      img: '../../public/images/aboutUs1x.jpg',
      id: '123422',
      title: 'Онлайн майтсер-класи для дітей та дорослих',
      date: '2023-07-30',
      location: 'Some Location 1',
      time: '15:00',
    },
    {
      img: '../../public/images/group.jpg',
      id: '123884',
      title: 'Онлайн майтсер-класи для дітей та дорослих',
      date: '2023-07-30',
      location: 'Some Location 1',
      time: '15:00',
    },
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
      <Header city={''} />
      <main>
        <AboutUs />
        <ProductList title="Події у Києві" products={products} />
        <ProductList title="Активний відпочинок в Києві" products={products} />
        <ProductList title="Популярні хобі" products={products} />
        <ProductList title="Курси в Києві" products={products} />
        <ProductList title="Курси онлайн" products={products} />
      </main>
      <Footer />
      {showModal && (
        <Backdrop>
          <WelcomeModal
            closeModal={handleModalToggle}
            handleBtnYes={handleModalToggle}
            handleBtnNo={openModal}
            city={city}
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