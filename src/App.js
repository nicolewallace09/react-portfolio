import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <div>
      <Header></Header>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
