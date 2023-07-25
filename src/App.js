import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./Components/Header/NavBar";
import LoginPage from "./Components/Pages/Login/LoginPage";
import ProfilePage from "./Components/Pages/Profile/ProfilePage";
import HomePage from "./Components/Pages/Home/HomePage";
import AuthContextProvider, { AuthContext } from "./Components/Store/AuthContext";
import { useContext } from "react";

const App = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <NavBar />
      <Routes>
        
        <Route path='/' element={<HomePage />} />
            <Route path='/HomePage' element={<HomePage/>} />
            {!AuthCtx.isLoggedIn && <Route path='/LoginPage' element={<LoginPage />} />}
            {<Route path='/ProfilePage' element={<ProfilePage />} />}

            {/* Redirect to "/Home" if an unknown route is accessed */}
            <Route path='*' element={<Navigate to="/HomePage" />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
