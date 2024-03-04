import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <>
      <Navbar />
    <AllRoutes/>
      <Footer/>
    </>
  );
}

export default App;
