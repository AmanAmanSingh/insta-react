import HeaderInsta from "../header/header";
import "./instacard.css";
import shareIcon from "../../IMAGES/send.png"
import loader from "../../IMAGES/loader-gif.gif"
import { useState } from "react";

const InstaCard = ({ jsonData }) => {
    const newjsonData = Object.values(jsonData);
    const [counts, setCounts] = useState({});
    // const [clicked, setClicked] = useState({})

    const handleLikes = (id) => {
        // console.log(id)
        setCounts(prevCounts => ({ ...prevCounts, [id]: (prevCounts[id] || 0) + 1 }));
        //{63d53b173563a04ff25004c2: 1}

    }


    return (
        <>
            <HeaderInsta />
            {!newjsonData.length && <img className="loader-img" src={loader} alt="loader-image" />}
            <main className="main-container">
                {newjsonData.map((value, index) => {
                    return (
                        <div className="map-listing" key={index}>
                            <section className="mains-head">
                                <div className="name_location-text">
                                    <h3>{value.author}</h3>
                                    <h4>{value.location}</h4>
                                </div>
                                <div >
                                    <h3><i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i></h3>
                                </div>
                            </section>

                            <section className="image-section">
                                <img className="image-s" src={value.image} alt="" />
                            </section>

                            <section className="like_save-icons">
                                <div className="share-icon-flex">
                                    <div>
                                        <article className="likes" onClick={() => handleLikes(value._id)}><i className="fa fa-heart-o fa-lg" aria-hidden="true"></i></article>
                                    </div>
                                    <div><i className="fa fa-comments-o fa-lg" aria-hidden="true"></i></div>
                                    <div>
                                        <article className="share"> <img style={{ "width": "20px", "marginTop": "0.2em" }} src={shareIcon} alt="icon" /> </article>
                                    </div>
                                </div>
                                <div>
                                    <p className="date">{value.Date}</p>
                                </div>
                            </section>

                            <section className="count-likes">
                                <div>
                                    {counts[value._id] || 0} ❤️
                                </div>
                            </section>

                            <section className="discription">
                                <h5>{value.description}</h5>
                            </section>
                        </div>
                    )
                })}
            </main >
        </>
    )
}
export default InstaCard;