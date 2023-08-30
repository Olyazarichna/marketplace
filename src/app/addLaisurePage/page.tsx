import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AddActivityForm from './components/AddActivityForm/AddActivityForm';

const LaisurePage: React.FC = () => {
  return (
    <>
      <Header city={''}/>
      <main className={'container'}>
        <AddActivityForm />
      </main>
      <Footer />
    </>
  );
};

  export default LaisurePage;
