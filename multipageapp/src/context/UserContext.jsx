import { useReducer } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

//learning about context
const UserContext = createContext();

function UserProvider({ children }) {
    //const [user, setUser] = useState("guest");

    //using dispatch
    // const [user, dispatch] = useReducer(userReducer, "");

    //passing object
    const [state, dispatch] = useReducer(userReducer, { user: null });

    function userReducer(state, action) {
        if(action.type === "login") {
            return { user: action.payload };
        } 
        if(action.type === "logout") {
            return {user: "Guest"};
        }
    }

    return (
        /* userContext is accessible in Checkout comp */
        // <UserContext.Provider value={{ user, setUser }}>
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };