import HeaderInsta from "../header/header";
import "./instacard.css";
import shareIcon from "../../IMAGES/send.png"

const InstaCard = ({ jsonData }) => {
    const newjsonData = Object.values(jsonData);
    // console.log(newjsonData, "json");

    return (
        <>
            <HeaderInsta />
            <main className="main-container">
                {newjsonData.map((value, index) => {
                    return (
                        <div className="map-listing" key={index}>
                            <section className="mains-head">
                                <div className="name_location-text">
                                    <h3>{value.author}</h3>
                                    <h4>{value.location}</h4>
                                </div>
                                <div>
                                    <h3><i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i></h3>
                                </div>
                            </section>

                            <section className="image-section">
                                <img className="image-s" src={value.image} alt="" />
                            </section>

                            <section className="like_save-icons">
                                <div className="share-icon-flex">
                                    <div>
                                        <article className="likes" ><i className="fa fa-heart-o fa-lg" aria-hidden="true"></i></article>
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
                                <div>{value.likes}</div>
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