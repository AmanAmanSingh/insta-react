import { useState } from "react";
import HeaderInsta from "../header/header";
import axios from "axios";
import "./uploadpost.css"
import { useNavigate } from "react-router-dom";
const UploadPost = () => {
    const [author, setauthor] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [imageFile, setImageFile] = useState("");
    const [imageName, setImageName] = useState("Attach File");
    const [Err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleSubmition = async () => {
        try {
            const base64Path = await fileTobase64(imageFile);
            const data = await axios.post("https://instaclone-server-fh5k.onrender.com/upload", {
                image: base64Path,
                author: author,
                location: location,
                description: description
            })
            // console.log(data);

            setauthor(""); setLocation(""); setDescription(""); setImageFile("");
        }
        catch (e) {
            console.log(e)
            setErr(e.response.data.message.message);
        }
        // console.log(base64Path);
        // console.log(postData);
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


    return (

        <>
            <HeaderInsta />
            <div className="upload-container">
                <section>
                    <label htmlFor="file-input" className="fa fa-cloud-upload fa-lg" >
                        {imageName}
                    </label>
                    <input id="file-input" type="file" className="file-input"
                        onChange={(e) => { setImageFile(e.target.files[0]); setImageName(e.target.files[0].name); }} />
                </section>

                <div className="author-location">
                    <div>
                        <input type="text" id="author" placeholder="author" name="author" onChange={(e) => { setauthor(e.target.value) }} value={author} />
                    </div>
                    <div>
                        <input type="text" id="location" placeholder="Location" name="location" onChange={(e) => { setLocation(e.target.value) }} value={location} />
                    </div>
                </div>

                <section>
                    <textarea id="description" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </section>

                <section className="post-btn">
                    <button onClick={() => { handleSubmition(); }}>POST</button>
                </section>
            </div>
            {Err && <h1 className="alert-msg" >ALL FIELD  REQUIRED.....</h1>}
        </>
    )
}
export default UploadPost;



