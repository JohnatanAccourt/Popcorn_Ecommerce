import React from 'react';


import './Style.css';

export default function StoreComponent({animationOn}){
    return(
        <section className="store__container">
            <div className={!animationOn ? "store__background" : "store__background store--backgroundOFF"}></div>
            <div className={!animationOn ? "store__backgroundTriangle" : "store__backgroundTriangle store--backgroundTriangleOFF"}></div>
        </section> 
    )
}