import React from 'react';

import popcorn from '../../assets/embalagemPipoca.png';
import popcornitem from '../../assets/65f725_ec44a29adfb046eaa547a6074981adc2_mv2.png';
import bucket from '../../assets/bucket-fill.png';

import Add from '@material-ui/icons/AddCircle';
import Remove from '@material-ui/icons/RemoveCircle';
import Cart from '@material-ui/icons/AddShoppingCart';

import './Style.css';

export default function StoreComponent({ animationOn }){
    return(
        <section className="store__container">
            <main className="store__wrapper">
                <div className={!animationOn ? "store__list" : "store__list store__listOFF"}>
                    <p className="store__listTitle">Sabores:</p>
                    <div className="store__wrapperList">
                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <strong>melancia</strong>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <strong>melancia</strong>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <strong>melancia</strong>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <strong>melancia</strong>
                        </div>  

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <strong>melancia</strong>
                        </div>

                        <div className="store__popcorn">
                            <img src={popcornitem} alt="popcorn item" />
                            <strong>melancia</strong>
                        </div>
                    </div>
                    <p className="store__listTitle alignCenter">Role para baixo para ver mais</p>
                </div>

                <div className={!animationOn ? "store__popcornImage": "store__popcornImage store__popcornImageOFF"}>
                    <img src={popcorn} alt="popcorn image"  />
                </div>
                
                <div className={!animationOn ? "store__list" : "store__list store__listOFF"}>
                    <h5>Melancia</h5>
                    <div className="store__desc">
                        <label className="store__radio">
                            <input type="checkbox" />
                            <span className="store__icon">
                                <img src={bucket} alt="bucket" style={{ width: 15 }} />
                            </span>
                            <p className="store__iconText">Pequeno 222g</p>
                        </label>

                        <label className="store__radio">
                            <input type="checkbox" />
                            <span className="store__icon">
                                <img src={bucket} alt="bucket" style={{ width: 20 }} />
                            </span>
                            <p className="store__iconText">Médio 222g</p>
                        </label>

                        <label className="store__radio">
                            <input type="checkbox" />
                            <span className="store__icon">
                                <img src={bucket} alt="bucket" style={{ width: 30 }} />
                            </span>
                            <p className="store__iconText">Grande 222g</p>
                        </label>
                    </div>
                    
                    <p className="store__counterTitle">Quantidade:</p>
                    <div className="store__counter">
                        <div className="store__wrapperCounter">
                            <button>
                                <Remove style={{color: '#530606', fontSize: 30}} />
                            </button>
                            <p>10</p>
                            <button>
                                <Add style={{color: '#530606', fontSize: 30}} />
                            </button>
                        </div>
                    </div>

                    <div className="store__wrapperValue">
                        <p>Preço Total:</p>
                        <strong>R$:30,00</strong>
                    </div>

                    <button className="store__buttonConfirm">
                        <Cart style={{color: '#fff', fontSize: 30}} />
                        <p>Adicionar Carrinho</p>
                    </button>

                </div>
            </main>

            <div className={!animationOn ? "store__background" : "store__background store--backgroundOFF"}></div>
            <div className={!animationOn ? "store__backgroundTriangle" : "store__backgroundTriangle store--backgroundTriangleOFF"}></div>
        </section> 
    )
}