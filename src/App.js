import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components.js/Header';
import MainContent from './components.js/MainContent';
import Footer from './components.js/Footer';


function App() {
  return (
    <div className="theWholePage">      
      <Header />
      <MainContent />
      <Footer /> 
    </div>
  );
}

export default App;
