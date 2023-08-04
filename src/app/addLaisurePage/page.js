import styles from "../page.module.scss";
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import BtnBack from "../components/BtnBack/BtnBack";

const LaisurePage = () => {
    return (
        <>
            <Header />
            <main className={"container"}>
                <BtnBack />
                <h2 style={{ color: "red", textAlign: "center" }}>додати подію</h2>
            </main>
            <Footer />
        </>

    );
};

export default LaisurePage;