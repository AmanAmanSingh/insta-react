import { useNavigate } from "react-router-dom";
import "./header.css";
const HeaderInsta = ({ }) => {
    const navigate = useNavigate();
    return (
        <>
            <section className="header-container insta-header">
                <article className="insta-tittle"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i> <span>InstaClone</span> </article>
                <article className="camera_icon" onClick={() => { navigate("/uploadpost") }}> <i className="fa fa-camera fa-lg" aria-hidden="true"></i> </article>
            </section>
        </>
    )
}
export default HeaderInsta;
