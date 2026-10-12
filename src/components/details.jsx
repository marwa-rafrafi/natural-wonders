import {useState} from "react";

function Details({informations}){
    const{location,type,size}=informations;
    const [showDetails,setShowDetails]=useState(false);
    return(
        <>
        <button className="btn btn-outline-primary mb-2" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "hide details" : "show details"}
        </button>
        {showDetails && (
            <ul className="list-group ">
                <li className="list-group-item"><strong>localisation:</strong> {location}</li>
                <li className="list-group-item"><strong>type:</strong> {type}</li>
                <li className="list-group-item"><strong>dimension:</strong> {size}</li>
            </ul>
        )}
        </>
    );

}
export default Details;