// App.js
import React from 'react';
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
