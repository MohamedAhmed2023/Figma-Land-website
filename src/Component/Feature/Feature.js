import "./Feature.css"
import chat from "../Assets/images/Chat Bot (1).png"
import vector1 from "../Assets/images/Vector.png"
import vector2 from "../Assets/images/Vector (1).png"
import vector3 from "../Assets/images/Vector (2).png"
import HeadingText from "../HeadingText/HeadingText"
function Feature() {
    return (
        <>
            <div className="Feature">
                <HeadingText Heading="FEATURES" description="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
                <div className="Feature-container">
                    <div className="feature-left">
                        <img src={chat} alt=""></img>
                    </div>
                    <div className="feature-right">
                        <div className="content-right">
                            <div className="upper">
                                <img src={vector1} alt=""></img>
                                <span>
                                    A single source of truth
                                </span>
                            </div>
                            <div className="lower">
                                <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="upper">
                                <img src={vector2} alt=""></img>
                                <span>Intuitive interface</span>
                            </div>
                            <div className="lower">
                                <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="upper">
                                <img src={vector3} alt=""></img>
                                <span>Or with rules</span>
                            </div>
                            <div className="lower">
                                <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Feature;