import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            This is the dashboard.
            <Outlet />
        </div>
    );
}