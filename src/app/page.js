import "../scss/main.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import ProductList from "./components/ProductList/ProductList";
export default function Home() {
  return (
    <main className={"container"}>
      <AboutUs />
      <ProductList title="Події у Києві" />
      <ProductList title="Активний відпочинок в Києві" />
      <ProductList title="Популярні хобі" />
      <ProductList title="Курси в Києві" />
      <ProductList title="Курси онлайн" />
    </main>
  );
}
