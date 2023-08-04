"use client";
import "../scss/main.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import ProductList from "./components/ProductList/ProductList";
import img1 from "../../public/images/aboutUs1x.jpg";
import img2 from "../../public/images/girls.jpg";
import img3 from "../../public/images/group.jpg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import Backdrop from "./components/Backdrop/Backdrop.jsx";
import WelcomeModal from "./components/WelcomeModal/WelcomeModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  const products = [
    {
      img: img1,
      id: "123",
      title: "Вуличний театр для дітей",
      date: "2023-07-30",
      location: "Some Location 1",
      time: "15:00",
    },
    {
      img: img2,
      id: "1237",
      title: "Благодійний музичний вечір органної музики",
      date: "2023-07-30",
      location: "Some Location 1",
      time: "15:00",
    },
    {
      img: img3,
      id: "1235",
      title: "Онлайн майтсер-класи для дітей та дорослих",
      date: "2023-07-30",
      location: "Some Location 1",
      time: "15:00",
    },
    {
      img: img1,
      id: "1234545",
      title: "Онлайн майтсер-класи для дітей та дорослих",
      date: "2023-07-30",
      location: "Some Location 1",
      time: "15:00",
    },
    {
      img: img1,
      id: "123422",
      title: "Онлайн майтсер-класи для дітей та дорослих",
      date: "2023-07-30",
      location: "Some Location 1",
      time: "15:00",
    },
    {
      img: img1,
      id: "123884",
      title: "Онлайн майтсер-класи для дітей та дорослих",
      date: "2023-07-30",
      location: "Some Location 1",
      time: "15:00",
    },
  ];

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const openModal = () => {
    alert("тут буде ще одна модалка");
  };
  return (
    <>
      <Header />
      <main className={"container"}>
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
          />
        </Backdrop>
      )}
    </>
  );
}
