import React from 'react';
import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
	        <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App