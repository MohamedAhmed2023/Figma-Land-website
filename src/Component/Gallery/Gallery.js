
import "./Gallery.css"
import card1 from "../Assets/images/Card (1).png"
import card2 from "../Assets/images/Card (2).png"
import card3 from "../Assets/images/Card (3).png"
import card4 from "../Assets/images/Card (4).png"
import card5 from "../Assets/images/Card (5).png"
import card7 from "../Assets/images/22.png"
import brands from "../Assets/images/Brands.png"
import HeadingText from "../HeadingText/HeadingText"
function Gallery() {
    return (
        <>
            <HeadingText Heading="Gallery" description="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
            <div className="gallery-container">
                <div className="gallery-content">
                    <img src={card1} alt=""></img>
                    <img src={card2} alt=""></img>
                    <img src={card3} alt=""></img>
                    <img src={card4} alt=""></img>
                    <img src={card5} alt=""></img>
                    <img src={card7} alt=""></img>
                </div>
            </div>
            <button className="Btn-gallery">
                See more
            </button>
            <HeadingText Heading="Partners" description="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
            <div className="Partners">
                <img src={brands} alt=""></img>
            </div>
            <button className="Btn-partners">
                All Partners
            </button>
        </>
    )

}

export default Gallery;