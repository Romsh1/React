import { createContext } from 'react';
import { useState } from 'react';

//learning about context
const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState("guest");

    return (
        /* userContext is accessible in Checkout comp */
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };