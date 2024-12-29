import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Logout() {
    const { setUser } = useContext(UserContext);
    return (
        <div>
            <button onClick={() => setUser("guest")}>Logout</button>
        </div>
    );
}