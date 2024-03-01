
import "./Testimonials.css"
function Testimonials(props) {
    return (
        <>
            <div className="Testimonials-container">
                <div className="Testimonials">
                    <div className="upper">
                        <img src={props.img}></img>
                        <span>{props.name}</span>
                    </div>
                    <div className="lower">
                        <p>{props.discription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;