
import "./Contact.css"
import mac from "../Assets/images/Macbook Pro.png"
import board from "../Assets/images/Boards Notifications.png"
import HeadingText from "../HeadingText/HeadingText"
function Contact() {
    return (
        <>
            <HeadingText Heading="Contents" description="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
            <div className="contect">
                <div className="contect-content">
                    <h4>Work</h4>
                    <p>Ever wondered if you're too reliant<br />  on a client for work? Slate helps <br />  you identify .</p>
                    <button type="button">Sign Up</button>
                    <img className="img-contect" src={mac}></img>
                </div>
                <div className="contect-content">
                    <h4>Design with real data</h4>
                    <p>Ever wondered if you're too reliant<br />
                        on a client for work? Slate helps<br />
                        you identify .</p>
                    <button type="button">Try For Free</button>
                    <img className="img-contect" src={board}></img>
                </div>
            </div>
        </>
    )
}

export default Contact;