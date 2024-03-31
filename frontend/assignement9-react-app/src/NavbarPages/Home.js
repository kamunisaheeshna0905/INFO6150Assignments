

import React from 'react';
import CustomNavbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <CustomNavbar />
      <h1>Welcome to the Home Page</h1>
      <Outlet/>
    </>
  );
}

export default Home;
