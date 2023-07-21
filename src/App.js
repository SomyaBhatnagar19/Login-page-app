import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Update the import

import NavBar from "./Components/Header/NavBar";
import LoginPage from "./Components/Pages/Login/LoginPage";
import ProfilePage from "./Components/Pages/Profile/ProfilePage";
import HomePage from "./Components/Pages/Home/HomePage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;

