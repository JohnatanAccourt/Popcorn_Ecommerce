import React from 'react';
import Logo from '../../assets/pipoca.png'; 
import './Style.css';

export default function HelpComponent({ animationOn }){
    return(
        <section className={!animationOn ? "help__background" : "help__background help--backgroundOFF"}>
            <div className={!animationOn ? "help__Logo" : "help__Logo help--LogoOFF"}>
                <img  src={Logo} alt="logo" />
            </div>
            <div className={!animationOn ? "help__desc" : " help__desc help--descOFF"}>
                <h1>Olá, Somos a Lorem Ipsum</h1>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                
                orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magnaLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>

                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                
                orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magnaLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
            </div>
        </section>
    )
}