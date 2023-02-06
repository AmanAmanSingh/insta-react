import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const Token = localStorage.getItem("authToken");
    return (
        <>
            {Token.length ? children : <Navigate to="/login" />}
        </>
    )
}
export default Protected;