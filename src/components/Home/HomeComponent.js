import React from 'react';
import './Style.css';
import Popcorn from '../../assets/toppng.com-popcorn-1536x1221.png';
import Logo from '../../assets/pipoca.psd.svg';

export default function HomeComponent({animationOn}){
    return(
        <section className="home__container">
            <div className="home__wrapperMain">
                <div className={!animationOn ? "home__main" : "home__main home--mainOFF"}>
                    <p>Balde Grande</p>
                    <img src={Popcorn} alt="popcorn" />
                </div>
                <div className={!animationOn ? "home__wrapperLogo" : "home__wrapperLogo home--wrapperLogoOFF"}>
                    <img className="home__logo" src={Logo} alt="logo" />
                    <div className={!animationOn ? "home__slogan" : "home__slogan home--sloganOFF"}>
                        <h2>A melhor pipoca gourmet da Região</h2>
                    </div>
                </div>
            </div>

            <div className={!animationOn ? "home__price" : "home__price home--priceOFF"}>
                <p>Por apenas:</p>
                <h4>R$:50,00</h4>
            </div>
        </section>  
    )
}