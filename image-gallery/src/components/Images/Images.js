import React from 'react'
import ImageCard from './ImageCard';
import style from "./Image.module.css";

const Images = ({ images }) => {
  return (
    <div className={style.container}>
      {images.map((element) => {
        return <ImageCard image={element} />;
      })}
      
    </div>
  );
};

export default Images