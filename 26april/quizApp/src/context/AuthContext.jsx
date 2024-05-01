import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({children}) => {
    const[auth, setAuth] = useState(false);
    console.log(auth);
    return <authContext.Provider value={{auth,setAuth}}>
        {children}
    </authContext.Provider>
}