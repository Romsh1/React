import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <Link to="/dashboard">Home</Link>
            <Link to="/">Dashboard</Link>
        </div>
    );
}