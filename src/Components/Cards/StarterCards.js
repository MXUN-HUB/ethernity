import React from 'react';
import './StarterCard.css';

function Cards ({Title,Content}){
    return(
        <div className='card-container-starter'>
            <div className='title-container-starter'>
            {Title}
            </div>
            <div className='content-starter'>
            {Content}
            </div>
        </div>
    ) 
}

export default Cards;