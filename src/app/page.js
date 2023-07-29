import "../scss/main.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import ProductList from "./components/ProductList/ProductList";
export default function Home() {
  return (
    <main className={"container"}>
      <AboutUs />
      <ProductList title="Події у Києві" />
    </main>
  );
}
