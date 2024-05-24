import { createContext, useContext } from "react";

//Context
export const AuthContext = createContext();

//provider
export const AuthPrvider = ({ children }) => {
    const storeTokenInLS = (token) => {
        return localStorage.setItem('token', token);
    }

    return (
        <AuthContext.Provider value={{storeTokenInLS}}>
            {children}
        </AuthContext.Provider>
    );
}

//Custom hook
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        console.log("useauth used outside of the provider.");
    }
    return authContextValue;
}

