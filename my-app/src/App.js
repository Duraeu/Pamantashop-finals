// App.js
import React from 'react';
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthComponent from './components/AuthComponent';
import SearchBar from './components/SearchBar';

const app = require('express')();
const PORT = 8080;

app.listen(
  PORT,
  () => console.log('it is alive on http://localhost:${PORT}')
)
function App() {

  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="App">
      <div>
       <Navbar />
        <div className='Content flex-grow h-dvh'>
          <SearchBar onSearch={handleSearch} />
          <AppRouter />
        </div> 

        <div className='Footer'> 
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
