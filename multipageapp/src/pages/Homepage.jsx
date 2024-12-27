import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    function handleClick() {
        navigate("/dashboard/profile", {state: { username }});
    }
    return (
        <div>
            This is the homepage
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
            <button onClick={handleClick}>Go to Profile</button>
        </div>
    );
}