import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Ddg from './components/portfolio/ddg/Ddg';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        {/* <Route path="/" element={<MainLayout />} /> */}
        {/* Dummy Route (outside of the main layout) */}
        <Route path="/ddg" element={<Ddg />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

const MainLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portfolio />
        {/*<Testimonials />*/}
      <Contact />
    </>
  );
};

export default App;
