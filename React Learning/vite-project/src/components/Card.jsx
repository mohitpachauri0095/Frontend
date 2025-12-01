import React from "react";
import "./card.css";
 
function Card(props) { 
  const [clicked, setClicked] = React.useState(false)

  return (
    <div className={` card ${clicked ? "blue-card" : ""}`}>
      <img src="" alt="" />
      <h2>{props.title} </h2>
      <p>{props.description}  </p>
      <button 
        onClick={() => {
          setClicked(!clicked);
        }}
        >Click Me</button>
        
      </div>
  );
}
export default Card;