import React from 'react';

import popcorn from '../../assets/embalagemPipoca.png';
import popcornitem from '../../assets/65f725_ec44a29adfb046eaa547a6074981adc2_mv2.png';
import bucket from '../../assets/bucket-fill.png';

import './Style.css';

export default function StoreComponent({animationOn}){
    return(
        <section className="store__container">
            <main className="store__wrapper">
                <div className="store__list">
                    <p className="store__listTitle">Sabores:</p>
                    <div className="store__wrapperList">
                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <p>melancia</p>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <p>melancia</p>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <p>melancia</p>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <p>melancia</p>
                        </div>  

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <p>melancia</p>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <p>melancia</p>
                        </div>
                    </div>
                    <p className="store__listTitle alignCenter">Role para baixo para ver mais</p>
                </div>

                <div className="store__popcornImage">
                    <img src={popcorn} alt="popcorn image"  />
                </div>
                
                <div className="store__list">
                    <h5>Melancia</h5>
                    <div className="store__desc">
                        <div>
                            <span className="store__icon">
                                <img src={bucket} alt="bucket" style={{ width: 15 }} />
                            </span>
                            <p>pequeno 330g</p>
                        </div>
                        <div>
                            <span className="store__icon">
                                <img src={bucket} alt="bucket" style={{ width: 20 }} />
                            </span>
                            <p>pequeno 330g</p>
                        </div>
                        <div>
                            <span className="store__icon">
                                <img src={bucket} alt="bucket" style={{ width: 30 }} />
                            </span>
                            <p>pequeno 330g</p>
                        </div>
                    </div>
                </div>
            </main>

            <div className={!animationOn ? "store__background" : "store__background store--backgroundOFF"}></div>
            <div className={!animationOn ? "store__backgroundTriangle" : "store__backgroundTriangle store--backgroundTriangleOFF"}></div>
        </section> 
    )
}