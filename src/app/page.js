'use client';
import '../scss/main.scss';
import 'normalize.css/normalize.css';
import AboutUs from '../components/AboutUs/AboutUs';
import ProductList from '../components/ProductList/ProductList';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useState, useEffect } from 'react';
import Backdrop from '../components/Backdrop/Backdrop.jsx';
import ConfirmationModal from '../components/ConfirmationModal/ConfirmationModal';
import ChooseCityModal from '../components/ChooseCityModal/ChooseCityModal.jsx';
import getCity from './services/getCity';
import { products } from './products';
import ProductListContainer from '../components/ProductListContainer/ProductListContainer';
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector(state => state.auth);
  console.log('user', user);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [city, setCity] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowConfirmationModal(true);
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

  const openCityModal = () => {
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
      <Header city={city} openCityModal={openCityModal} />
      <main>
        <AboutUs />
        <ProductListContainer title="Події у Києві">
          <ProductList products={products} />
        </ProductListContainer>
        <ProductListContainer title="Активний відпочинок в Києві">
          <ProductList products={products} />
        </ProductListContainer>
        <ProductListContainer title="Популярні хобі">
          <ProductList products={products} />
        </ProductListContainer>
        <ProductListContainer title="Курси в Києві">
          <ProductList products={products} />
        </ProductListContainer>
        <ProductListContainer title="Курси онлайн">
          <ProductList products={products} />
        </ProductListContainer>
      </main>
      <Footer />
      {showConfirmationModal && (
        <Backdrop>
          <ConfirmationModal
            closeModal={() => setShowConfirmationModal(false)}
            handleBtnYes={() => setShowConfirmationModal(false)}
            handleBtnNo={openCityModal}
            title={`Ваше місто ${city ? city : 'Київ'} ?`}
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
