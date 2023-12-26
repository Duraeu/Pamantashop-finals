import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
      <Home />
      <Home />
      </div>
      
      <Footer />
      <h1 className="text-2xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
    </div>

    
);
}

export default App;
