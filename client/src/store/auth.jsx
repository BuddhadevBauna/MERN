import { createContext, useContext, useState } from "react";


//context api(create context, provider, consumer)
//Context create
export const AuthContext = createContext();

//provider(for data passing)
export const AuthProvider = ({ children }) => {
    //for store token
    const storeTokenInLS = (token) => {
        return localStorage.setItem('token', token);
    }

    const [token, setToken] = useState(localStorage.getItem('token'));
    let isLoggedIn = !!token;
    // console.log(isLoggedIn);
    //Tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem('token');
    }
    
    return (
        <AuthContext.Provider value={{storeTokenInLS, isLoggedIn, LogoutUser}}>
            {children}
        </AuthContext.Provider>
    );
}

//Custom hook
export const useAuth = () => {
    //Usecontext use for consumer
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        console.log("useauth used outside of the provider.");
    }
    return authContextValue;
}

