import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';


//context api(create context, provider, consumer)
//Context create
export const AuthContext = createContext();

//provider(for data passing)
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isLoggedIn, setLoggedIn] = useState(!!token);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");
    const [services, setservices] = useState([]);
    const AuthorizationToken = `Bearer ${token}`;
    

    //for store token
    const storeTokenInLS = (token) => {
        setToken(token);
        setLoggedIn(true);
        localStorage.setItem('token', token);
    }

    //Tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        setLoggedIn(false);
        localStorage.removeItem('token');
    }

    //jwt authentication - to get currently logedIn user data
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8080/api/auth/user`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            })
            // console.log(response);
            if (response.statusText === "OK") {
                const data = response.data;
                // console.log("user data", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }
        } catch (error) {
            console.log("Error fetching userdata");
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if(token) {
            userAuthentication();
        } else {
            setUser("");
        }
    }, [token]);


    // to fetch the services data from databases
    const fetchServices = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/data/service`);
            // console.log(response);
            if (response.statusText === "OK") {
                // console.log(response.data);
                setservices(response.data);
            }
        } catch (error) {
            console.log(`fetch services error ${error}`);
        }
    }
    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                storeTokenInLS,
                isLoggedIn,
                LogoutUser,
                user,
                services,
                AuthorizationToken,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

//Custom hook
export const useAuth = () => {
    //Usecontext use for consumer
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        console.log("useauth used outside of the provider.");
    }
    return authContextValue;
}

