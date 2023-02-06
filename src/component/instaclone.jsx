import { useState } from "react";
import { useEffect } from "react";
import InstaCard from "./instacard/instacard";
import axios from "axios";

const InstaClone = () => {
    const [userData, setuserData] = useState([]);
    const [postData, setPostData] = useState([]);
    const token = localStorage.getItem("authToken");
    useEffect(() => {
        axios.get("https://insta-serverpage.onrender.com/images", {
            headers: {
                Authorization: token
            }
        }).then((imageData) => {
            setPostData(imageData.data.images)
            // debugger;
        })
    }, []);

    return (
        <>
            <div>
                <InstaCard jsonData={postData} />
            </div>
        </>
    )

}
export default InstaClone;







        // https://instaclone-server-fh5k.onrender.com/images

