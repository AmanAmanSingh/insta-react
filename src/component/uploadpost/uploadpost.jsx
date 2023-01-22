import { useState } from "react";
import HeaderInsta from "../header/header";
import axios from "axios";
import "./uploadpost.css"
import { useNavigate } from "react-router-dom";
const UploadPost = () => {

    const [postData, setPostData] = useState({ author: "", location: "", description: "" });
    const [imageFile, setImageFile] = useState("");
    const [imageName, setImageName] = useState("Attach File");
    const [alertMsg, setAlert] = useState(null)
    const [clickOnce, setClickOnce] = useState(0)
    const navigate = useNavigate();

    const handleSubmition = async () => {

        try {
            const base64Path = await fileTobase64(imageFile);
            const data = await axios.post("https://instaclone-server-fh5k.onrender.com/upload", {
                image: base64Path,
                author: postData.author,
                location: postData.location,
                description: postData.description
            })

            setPostData("");
            navigate("/insta-main");
        }
        catch (e) {
            console.log(e.response.data.message.message);
        }
        // console.log(base64Path);
    }

    const fileTobase64 = (file) => {
        if (!file) {
            return undefined;
        };
        return new Promise((resolve, rejeted) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = (err) => {
                rejeted(err)
            }
        })
    }
    let disable = (imageFile && postData.author && postData.location && postData.description);

    return (
        <>
            <HeaderInsta />
            <div className="upload-container">
                <section>
                    <label htmlFor="file-input" className="fa fa-cloud-upload fa-lg" >
                        {imageName}
                    </label>
                    <input id="file-input" type="file" className="file-input"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file.size > 384000) {
                                setAlert("File size is too large, maximum allowed file size is 375kb")
                            } else {
                                setImageFile(e.target.files[0]); setImageName(e.target.files[0].name);
                                setAlert(null);
                            }
                        }} />
                </section>

                <div className="author-location">
                    <div>
                        <input type="text" id="author" placeholder="author" name="author" onChange={(e) => { setPostData({ ...postData, author: e.target.value }) }} value={postData.author} />
                    </div>
                    <div>
                        <input type="text" id="location" placeholder="Location" name="location" onChange={(e) => { setPostData({ ...postData, location: e.target.value }) }} value={postData.location} />
                    </div>
                </div>

                <section>
                    <textarea id="description" placeholder="Description" onChange={(e) => setPostData({ ...postData, description: e.target.value })} value={postData.description}>
                    </textarea>
                </section>

                <section className="post-btn">
                    <button onClick={() => { handleSubmition(); setClickOnce(1) }} disabled={disable && clickOnce == 0 ? false : true}>POST</button>
                </section>
            </div>
            {alertMsg && <h4 className="alert-msg">{alertMsg}</h4>}
            {clickOnce == 1 ? <h4 className="upload-msg">Uploading....</h4> : null}
        </>
    )
}
export default UploadPost;



