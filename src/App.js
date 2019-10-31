import React from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts/stylesheet.css'
import Header from './modules/Header/Header';
import TopBaner from './modules/TopBanner/TopBanner';
import ContextDesc from './modules/ContextDesc/ContextDesc';
import Analitics from './modules/Analitics/Analitics';
import Company from './modules/Company/Company';
import Footer from './modules/Footer/Footer';


function App() {
  return (
    <div className="all">
      <Header />
      <TopBaner />
      <ContextDesc />
      <Analitics />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
