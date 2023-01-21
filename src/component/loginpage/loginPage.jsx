import "./loginPage.css"
import { Link, useNavigate } from "react-router-dom";
import lens from "../../IMAGES/lens-1418954.png"
const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="login-page">
                <div className="entry-container">
                    <img src={lens} alt="10X" />
                    <div className="flexed-item-r">
                        <div className="entry-text">10x Team 04</div>
                        <button onClick={() => { navigate("/insta-main") }}>Enter</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LoginPage;

