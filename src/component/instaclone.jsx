import { useState } from "react";
import { useEffect } from "react";
import InstaCard from "./instacard/instacard";
import axios from "axios";

const InstaClone = () => {
    const [userData, setuserData] = useState([]);
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        axios.get("https://instaclone-server-fh5k.onrender.com/images").then((imageData) => {
            setPostData(imageData.data.images)
            // debugger;
        })
    }, [])

    return (
        <>
            <div>
                <InstaCard jsonData={postData} />
            </div>
        </>
    )

}
export default InstaClone;








 // useEffect(() => {
    //     fetchFunc();
    // }, [])

    // const fetchFunc = () => {
    //     fetch("http://localhost:8081/images").then((res) => {
    //         return res.json();
    //     }).then((result) => {
    //         setuserData(result);
    //     })
    // }


// "PostImage": "./IMG-ICONS/10ximage.jpeg",

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UjL5vk1rDn3dls0qLhhTsc1ToIJns7qlfA&usqp=CAU




// "user": [
//     {
//         "name": "Siva",
//         "location": "Bengaluru",
//         "likes": 64,
//         "description": "Kick start your career",
//         "PostImage": "",
//         "date": "12/02/2022"
//     },
//     {
//         "name": "Neeraj",
//         "location": "Pune",
//         "likes": 30,
//         "description": "Sample Description",
//         "PostImage": "",
//         "date": "15/05/2022"
//     },
//     {
//         "name": "Rahul",
//         "location": "Hyderabad",
//         "likes": 30,
//         "description": "Sample Description for Post",
//         "PostImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UjL5vk1rDn3dls0qLhhTsc1ToIJns7qlfA&usqp=CAU",
//         "date": "10/06/2022"
//     }
// ]


