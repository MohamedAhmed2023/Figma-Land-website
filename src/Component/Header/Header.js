import "./Header.css"
import LandinImage from "../Assets/images/screens (1).png"
function Header() {
    return (
        <>
            <div className="Header">
                <div className="HeaderContent">
                    <h1>Work at the speed of thought</h1>
                    <p>Most calendars are designed for teams. Slate is designed for freelancers <br />who want a simple way to plan their schedule.</p>
                    <div className="BtnHeader">
                        <button className="Btn1">Try For Free</button>
                        <button className="Btn2">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="landingImage">
                <img src={LandinImage} alt=""></img>
            </div>
        </>
    )
}

export default Header;
