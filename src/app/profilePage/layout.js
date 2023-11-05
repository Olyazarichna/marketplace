import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Header />
     <section className='container'>  
     {children}
     </section>
      <Footer />
    </section>
  );
}
