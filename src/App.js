import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ProductPage from './pages/ProductPage';
import SalesPersonPage from './pages/SalesPersonPage';
import ManagerPage from './pages/ManagerPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/salespersons" element={<SalesPersonPage />} />
        <Route path="/managers" element={<ManagerPage />} />
      </Routes>
    </Router>
  )
}

export default App