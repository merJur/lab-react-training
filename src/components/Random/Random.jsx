import React from 'react';
import './Random.css';

const Random = (props) => {

    const { min, max } = props
    
   let randomNumb = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
    return(
        <p className='P-random'> {randomNumb (min, max)} </p>
        
    )
}




export default Random