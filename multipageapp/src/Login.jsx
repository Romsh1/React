import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./context/UserContext";

export default function Login() {
    const [value, setValue] = useState("");
    const { state, dispatch } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        //setUser(value);
        dispatch({type: "login", payload: value})
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