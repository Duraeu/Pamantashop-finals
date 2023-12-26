import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';

function App() {
  const title='welcome to my website';
  const likes = 50;
  const person = {};
  const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />

      <div className="content">
      <Home />
      <Home />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
