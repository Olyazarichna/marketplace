import '../scss/main.scss';
import { Open_Sans } from 'next/font/google';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ReduxProvider } from '@/redux/provider';

export const metadata = {
  title: 'Navkolo Dozvillia',
  description:
    'Explore a world of leisure and recreation. Discover adventure, relaxation, culture, family fun, nightlife, cuisine, and more. Plan your perfect leisure activities here.',
};
const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        {/* <Header /> */}
        <ReduxProvider>
            {children}
        </ReduxProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
