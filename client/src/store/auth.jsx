import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';


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
    
    //jwt authentication - to get currently logedIn user data
    const [user, setUser] = useState("");
    const userAuthentication = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(response);
            if(response.statusText === "OK") {
                const data = response.data;
                // console.log("user data", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching userdata");
        }
    }
    useEffect(() => {
        userAuthentication();
    }, [])

    return (
        <AuthContext.Provider value={{storeTokenInLS, isLoggedIn, LogoutUser, user}}>
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

