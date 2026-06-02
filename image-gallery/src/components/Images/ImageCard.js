import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalculator  } from "@fortawesome/free-solid-svg-icons";
import style from "./Image.module.css";
const ImageCard = ({ image }) => {
  return (
    <div className={style.card}>
      <img
        src={image.imageUrl} alt={image.name} 
      />
      <h1>{image.name}</h1>
      <p>
      {image.desc}
      </p>
      <div>
        <p>
          <FontAwesomeIcon icon={faUser} style={{ color: "#3c73d3" }} />
          <span>{image.author}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faCalculator} style={{ color: "#3c73d3" }} />
          <span>{image.date}</span>
        </p>
      </div>
    </div>
  );
}

export default ImageCard