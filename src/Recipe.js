import React from 'react'; 
import style from './Recipe.module.css';

//deconstructing object from App.js
const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className='recipees'>

        <h1> {title}</h1>
        <ol>
        {
            ingredients.map(ingredients =>(<li>{ingredients.text}</li>))
        }
        </ol>
        <p>{calories}</p>
        <img className='imagesss' src={image} alt='' />

        </div>

    );
}

export default Recipe;