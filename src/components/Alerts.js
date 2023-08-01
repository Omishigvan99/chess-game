import ReactDom from "react-dom";
import "./Alerts.css"
import check from "../images/Checks.svg"

function Alerts(props) {
    return ReactDom.createPortal(
        <div className="outerBox"
            
            onClick={(event) => {
                props.dispatch({ type: "closeAlerts" })
            }}
        >
            <div
                
                className="popin"

                onClick={(event) => {
                    event.stopPropagation()
                    // alert("Hello")
                }}
            >
                <img src={check} alt="checks" />
            </div>
        </div>,
        document.getElementById("portal")
    );
}

export default Alerts;
