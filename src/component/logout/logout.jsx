import { Navigate, Link } from "react-router-dom";
import "./logout.css"
const Logout = () => {
    const handleLogout = async () => {
        await localStorage.setItem("authToken", "");
    }
    return (
        <>
            <div className="logout-container">
                <Link to="/login"> <button className="logout-btn" onClick={handleLogout}>Logout</button></Link>
            </div>
        </>
    )
}
export default Logout;