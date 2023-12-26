// App.js
import React from 'react';
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className=''>
       <Navbar />
        
        <div className='flex-grow'>
          <AppRouter />
        
        </div>  
      <Footer />
      </div>
    </div>
  );
}

export default App;
