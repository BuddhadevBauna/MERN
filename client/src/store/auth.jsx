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


    // to fetch the services data from databases
    const [services, setservices] = useState([]);
    const fetchServices = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/data/service`);
            // console.log(response);
            if(response.statusText === "OK") {
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
        <AuthContext.Provider value={{storeTokenInLS, isLoggedIn, LogoutUser, user, services}}>
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

