import "./main.css"
import { useState } from "react"
const Dropdown = ({title}) => {
    const [open,setOpen]  = useState()
    return (
        <div className={`drop ${open ? "open" : ""}`}>
            <div className="toggle" onClick={() => setOpen(!open)}>    <span className="line"></span> {title}</div>
            <div className="list">
               
                    <span className="drop-link">To Go</span>
                    <span className="drop-link">Delivery</span>
                    
            </div>
        </div>
    );
};



export default Dropdown;