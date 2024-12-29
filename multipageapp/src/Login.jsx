import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./context/UserContext";

export default function Login() {
    const [value, setValue] = useState("");
    const { user, setUser } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        setUser(value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}