import UserHeader from "../../components/UserHeader/UserHeader"
import UserNavigation from "../../components/UserNavigation/UserNavigation"
import "./pages.scss";
import { Navigate, useLocation } from "react-router-dom";
import SchedulePage from "./schedule/schedule-page";
import UserPage from "./user-account/user-page";
import { useAppSelector } from "../../service/store";
import { getAuthStatus } from "../../service/selectors";

export default function MainUserPage () {
    const location = useLocation();
    
return (
    <section className="user-page">
    <UserHeader />
    <UserNavigation />
    <main className="main-content">
    {location.pathname === "/user" && <UserPage />}
    {location.pathname === "/user/schedule" && <SchedulePage />}
    </main>

    </section>
)
}