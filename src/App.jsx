import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

export default function App() {

  return (
    <div className="container">
      <Header />
      <Navbar />
      <main className="wrapper">
        {useRoutes(routes)}
      </main>
      <Footer />
    </div>
  )
}
