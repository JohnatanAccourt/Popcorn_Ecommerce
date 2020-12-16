import React from 'react';

import popcornitem from '../../assets/65f725_ec44a29adfb046eaa547a6074981adc2_mv2.png';
import Close from 'react-ionicons/lib/MdCloseCircle';
import Trash from 'react-ionicons/lib/IosTrash';

import './Style.css';

export default function CartComponent({modal, closeModal}){
    return(
        <aside className={!modal ? "cart__background" : "cart--backgroundOFF"}>
            <div className={!modal ? "cart__container" : "cart--containerOFF"}>
                <div className="cart__main">
                    <div className="cart__mainWrapper">
                        <header className="cart__headerCart">
                            <p>Seu Carrinho:</p>
                            <b>possui 10 itens</b>
                        </header>

                        <div className="cart__wrapperCartList">
                            <div className="cart__item">
                                <div className="cart__wrapperItem">
                                    <img src={popcornitem} alt="popcorn item" />
                                    <div className="cart__innerItem">
                                        <strong>Pipoca Artesanal</strong>
                                        <strong>Sabor melancia | grande</strong>
                                        <b>R$: 1000,00</b>
                                    </div>
                                </div>
                                <Trash color="#fff" fontSize="30" />
                            </div>
                        </div>

                        <ul className="cart__checkout">
                            <li>
                                <p>Seu carrinho</p>
                                <p>R$:40,00</p>
                            </li>
                            <li>
                                <p>Frete</p>
                                <p>R$:40,00</p>
                            </li>
                            <li>
                                <p>Total</p>
                                <p>R$:80,00</p>
                            </li>
                        </ul>

                        <button className="cart__btnConfirm">
                            <p>R$:50,00</p>
                            <p>Confirmar compra</p>
                        </button>
                    </div>
                </div>
                <button className="cart__close" onClick={closeModal}>
                    <Close fontSize='30' color="#fff" />
                    <p>Fechar Modal</p>
                    <Close fontSize='30' color="#fff"/>
                </button>
            </div>
        </aside>
    )
}