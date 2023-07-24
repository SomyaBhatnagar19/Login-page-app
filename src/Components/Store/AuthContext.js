import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");

  const loginHandler = (token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token"); // Corrected this line
    }
  };

  const responseToken = localStorage.getItem("token");

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token"); // Remove the token from localStorage on logout
  };

  const contextValue = {
    token: responseToken || token, // If token is not present in state, use the one from localStorage
    login: loginHandler,
    logout: logoutHandler,
  };

    console.log("Context value is : " + JSON.stringify(contextValue));

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;