import React from 'react';
import './Style.css';
import Popcorn from '../../assets/toppng.com-popcorn-1536x1221.png';
import Logo from '../../assets/pipoca.psd.svg';

export default function HomeComponent(){
    return(
        <section className="home__container">
            <div className="home__wrapperMain">
                <div className="home__main">
                    <p>Balde Grande</p>
                    <img src={Popcorn} alt="popcorn" />
                </div>
                <div className="home__wrapperLogo">
                    <img className="home__logo" src={Logo} alt="logo" />
                    <div className="home__slogan">
                        <h2>A melhor pipoca gourmet da Região</h2>
                    </div>
                </div>
            </div>

            <div className="home__price">
                <p>Por apenas:</p>
                <h4>R$:50,00</h4>
            </div>
        </section>  
    )
}