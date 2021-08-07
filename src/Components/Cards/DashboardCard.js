import React from 'react';
import './DashboardCard.css';

function Cards ({Title,Content}){
    return(
        <div className='card-container-dashboard'>
            <div className='title-container-dashboard'>
            <span className='title-dashboard'>{Title}</span>
            </div>
            <div className='content-dashboard'>
            <span>{Content}</span>
            </div>
        </div>
    )
}

export default Cards;