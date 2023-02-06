import "./loginPage.css"
import { Link, useNavigate } from "react-router-dom";
import lens from "../../IMAGES/lens-1418954.png"
import axios from "axios";
import { useState } from "react";
const LoginPage = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const [loginMsg, setLogingMsg] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const userLogin = await axios({
                url: "https://insta-serverpage.onrender.com/login",
                method: "Post",
                headers: {
                },
                data: { email: loginData.email, password: loginData.password }
            })
            localStorage.setItem("authToken", userLogin.data.token);
            // console.log(userLogin.data.token);
            setLogingMsg("Processing your request...");
            setTimeout(() => {
                navigate("/insta-main")
            }, 1500)

        } catch (e) {
            console.log(e)
            setLogingMsg(e.response.data.message);
        }
    }
    const handleErrMsg = () => {
        setLogingMsg("")
    }
    return (
        <>
            <section className="login-page">
                <div className="entry-container">
                    <img src={lens} alt="10X" />
                    <div className="flexed-item-r">
                        <div className="entry-text">10x Team 04</div>
                        <button id="signup" onClick={() => { navigate("/register") }}>Sign up</button>
                        <form className="login-form">
                            <section>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" id="email" onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }); handleErrMsg(); }} value={loginData.email} />
                            </section>
                            <section>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" id="password" onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }); handleErrMsg(); }} value={loginData.password} />
                            </section>
                            <div className="login-btn">
                                <button onClick={handleLogin}>Login</button>
                            </div>
                        </form>
                        {loginMsg && <h5 className="loging-msg">{loginMsg}</h5>}
                    </div>
                </div>
            </section>

        </>
    )
}
export default LoginPage;



// const Data = await axios.post("http://localhost:8081/login", {
//     email: loginData.email,
//     password: loginData.password

// })