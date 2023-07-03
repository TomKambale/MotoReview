import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx'
import Navbar from './Navbar.jsx';


function App() {
  return (
    <div className="App">
       <Header />
      <Navbar />
      <Home />
     
      {/* Your other content goes here */}
    </div>
  );
}

export default App;
