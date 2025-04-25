import Header from './components/layout/Header/Header'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

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
