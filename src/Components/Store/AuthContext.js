// import React, { useState } from "react";

// export const AuthContext = React.createContext({
//   token: "",
//   login: (token) => {},
//   logout: () => {},
// });

// const AuthContextProvider = (props) => {
//   const [token, setToken] = useState("");

//   const loginHandler = (token) => {
//     setToken(token);
//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token"); // Corrected this line
//     }
//   };

//   const responseToken = localStorage.getItem("token");

//   const logoutHandler = () => {
//     setToken("");
//     localStorage.removeItem("token"); // Remove the token from localStorage on logout
//   };

//   const contextValue = {
//     token: responseToken || token, // If token is not present in state, use the one from localStorage
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//     console.log("Context value is : " + JSON.stringify(contextValue));

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
import React from "react";
import { createContext } from "react";
import { useState } from "react";
//passing component as array (context global variable)
export const AuthContext = createContext({
    token: "",
    login: (token)=>{},
    logout: ()=>{}    
});

const AuthContextProvider = (props) => {

    const [token, setToken] = useState("");

    const loginHandler = (token) => {
        setToken(token);
        
        if(token){
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }
    //fetches token from local storage
    const  responseToken = localStorage.getItem("token");

    const logoutHandler = () => {
        setToken("");
        localStorage.removeItem("token");
    }

    const contextValue = {
        token: responseToken || token,
        login: loginHandler,
        logout: logoutHandler,
    }

    console.log("contextValue : "+JSON.stringify(contextValue));


    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;