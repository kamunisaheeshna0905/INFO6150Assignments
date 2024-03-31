import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './NavbarPages/Home';
import About from './NavbarPages/About';
import Contact from './NavbarPages/Contact';
import JobListings from './NavbarPages/JobListings';
import CompanyShowcase from './NavbarPages/CompanyShowcase';
import Login from './LoginPage/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='jobListings' element={<JobListings/>}/>
        <Route path='companyShowcase' element={<CompanyShowcase/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
