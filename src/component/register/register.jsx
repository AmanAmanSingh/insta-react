import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css"
const Register = () => {
    const [userData, setUserData] = useState({ username: "", email: "", password: "" });
    const [Err, setErr] = useState(null);
    const [registerMsg, setRegisterMsg] = useState("")
    const navigate = useNavigate();

    const handleRegisteration = async (e) => {
        e.preventDefault()
        try {
            const Data = await axios.post("https://insta-serverpage.onrender.com/register", {
                username: userData.username,
                email: userData.email,
                password: userData.password
            })
            // console.log(Data);
            setErr(null);
            setRegisterMsg("Verifying credentials...");
            setTimeout(() => {
                navigate("/login")
            }, 1500)

        } catch (e) {
            console.log(e)
            setErr(e.response.data.message);
        }
    }
    let disable = userData.username && userData.email && userData.password;

    return (

        <>
            <div className="register-container">
                <form>
                    <h3 className="insta-tittle"><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</h3>
                    <section>
                        <label htmlFor="username">Username :</label>
                        <input type="text" name="username" id="username" onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} value={userData.username} />
                    </section>
                    <section>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} value={userData.email} />
                    </section>
                    <section >
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} value={userData.password} />
                    </section>
                    <section className="reg-btn">
                        <button onClick={handleRegisteration} disabled={disable ? false : true}>Register</button>
                    </section>
                    {Err && <h3>{Err}</h3>}
                    {registerMsg && <h3>{registerMsg}</h3>}
                </form>
            </div>
        </>
    )
}
export default Register;

{/* <Link to="/login" ><button>Login</button></Link> */ }