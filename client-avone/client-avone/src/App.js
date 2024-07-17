import './App.css';
import Navbar from './pages/Navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './pages/footer/Footer';
import { useState } from 'react';

function App() {
  const [login,setLogin]=useState(false)
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
