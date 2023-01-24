import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import WhatsappBut from './components/WhatsappBut';
import Main from './containers/Main';
import './sass/import.scss';

function App() {
  return <>
    <Header />
    <Main />
    <Footer />
    <WhatsappBut />
  </>;
}

export default App;
