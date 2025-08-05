// src/Layout/MainLayout.jsx

import React from "react";
import Navbar from "../Components/Navbar"; // adjust path as needed
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the matched child route */}
    </>
  );
};

export default MainLayout;
