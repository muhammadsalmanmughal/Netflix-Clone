import React from 'react'
import './style.css'

const AnimatedImage = props => {
    return(
        <div className='our-main-section-animated-image-container'>
            <img src={props.image}/>
        </div>
    )
}