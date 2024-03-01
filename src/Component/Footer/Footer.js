import "./Footer.css"
import img1 from "../Assets/images/bx_bx-map.png"
import img2 from "../Assets/images/img2footer.png"
import img3 from "../Assets/images/ant-design_facebook-filled.png"
import img4 from "../Assets/images/ant-design_linkedin-filled.png"
import img5 from "../Assets/images/ant-design_twitter-outlined.png"

function Footer(props) {
    return (
        <>
            <div className="Footer-container">
                <div className="left">
                    <div className="left-content">
                        <h3 className="HeadingFooter">Fingertipe</h3>
                        <ul>
                            <li>Home</li>
                            <li>Examples</li>
                            <li>Pricing</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                    <div className="left-content">
                        <h3 className="HeadingFooter">Resources</h3>
                        <ul>
                            <li>Home</li>
                            <li>Examples</li>
                            <li>Pricing</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                    <div className="left-content">
                        <h3 className="HeadingFooter">Fingertipe</h3>
                        <ul>
                            <li >Home</li>
                            <li>Examples</li>
                            <li>Pricing</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="upper-footer">
                        <img src={img1}></img>
                        <span>7480 Mockingbird Hill undefined </span>
                    </div>
                    <div className="upper-footer">
                        <img className="img1" src={img2}></img>
                        <span>(239) 555-0108</span>
                    </div>
                    <div className="lower">
                        <img src={img3}></img>
                        <img src={img4}></img>
                        <img src={img5}></img>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer;