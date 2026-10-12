import Details from "./details";
import {useState}from "react";
function Card(props){
    const informations={
        location:props.wonder.location,
        type:props.wonder.type,
        size:props.wonder.size,
    };
    const handleWikipediaClick = () => { const wikipediaUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(props.wonder.name)}`; window.open(wikipediaUrl, "_blank"); };
    const[likes,setLikes]=useState(0);
    return(
        <div className="col" >
            <div className="card h-100" >
            <img src={props.wonder.image} className="card-img-top" alt={props.wonder.name} height={200} style={{objectFit: "cover"}} />
            <div className="card-body">
                <h5 className="card-title">{props.wonder.name}</h5>
                <p className="card-text">{props.wonder.desc}</p>
                <Details informations={informations}/>
                <div className="d-flex gap-2 mt-3">
                 
                    <button className="btn btn-primary" onClick={handleWikipediaClick}> Wikipédia </button> <a href={props.wonder.google_map} target="_blank" rel="noreferrer" className="btn btn-success" > Google Maps </a>

                    <button className="btn btn-outline-danger" onClick={()=> setLikes(likes+1)}>j'aime({likes})</button></div>
                    
            </div>
        </div>
        </div>
    );

}
export default Card;