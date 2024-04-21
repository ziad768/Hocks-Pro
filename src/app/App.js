import React from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Header from './components/Header.js';
import About from './components/About.js';
import Product from './components/Product.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import CardDetails from './components/CardDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
    <Route  path="/" element={<Main/>}/>
    <Route  path="About" element={<About/>}/>
    <Route  path="Product" element={<Product/>}/>
    <Route  path="Product/:id" element={<CardDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    );
  }
// start route product id

export default App;
