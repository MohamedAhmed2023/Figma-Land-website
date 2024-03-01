
import "./HeadingText.css"
function HeadingText(props) {
    return (
        <>
            <div className="Feature-Text">
                <h2>{props.Heading}</h2>
                <p>{props.description}</p>
            </div></>
    )
}

export default HeadingText;