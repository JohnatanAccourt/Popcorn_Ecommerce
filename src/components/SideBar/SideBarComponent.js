import React from 'react';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import MdMail from 'react-ionicons/lib/MdMail';

import MdCart from 'react-ionicons/lib/MdCart';
import MdHome from 'react-ionicons/lib/MdHome';
import Store from '@material-ui/icons/Store';
import IosHelpCircle from 'react-ionicons/lib/IosHelpCircle';


import './Style.css';

export default function SideBarComponent(
    { 
        side, 
        onClickCart, 
        onClickHome, 
        onClickStore, 
        onClickHelp 
    }
    ){

    return(
        <nav 
            className={'SideBar__container'} 
            style={side === 'left' ? { left:0 } : { right:0 }}
        >
            <ul className='SideBar__list'>
                {side === 'left' ?
                    <>
                        <li>
                            <buttom className='SideBar__buttom'>
                                <LogoFacebook fontSize='40' color="#fff" style={{transition: '0.2s'}} />
                            </buttom>
                        </li>
                        <li>
                            <buttom className='SideBar__buttom'>
                                <LogoInstagram fontSize='40' color="#fff" style={{transition: '0.2s'}} />
                            </buttom>
                        </li>
                        <li>
                            <buttom className='SideBar__buttom'>
                                <MdMail fontSize='40' color="#fff" style={{transition: '0.2s'}} />
                            </buttom>
                        </li>
                        <li>
                            <buttom className='SideBar__buttom'>
                                <LogoGithub fontSize='40' color="#fff" style={{transition: '0.2s'}} />
                            </buttom>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <buttom className='SideBar__buttom' onClick={onClickCart}>
                                <MdCart fontSize='40' color="#fff" style={{transition: '0.2s'}} />
                            </buttom>
                        </li>
                        <li>
                            <buttom className='SideBar__buttom' onClick={onClickHome}>
                                <MdHome fontSize='40' color="#fff" style={{transition: '0.2s'}} />
                            </buttom>
                        </li>
                        <li>
                            <buttom className='SideBar__buttom' onClick={onClickStore}>
                                <Store style={{fontSize: 40, color: 'white', transition: '0.2s'}} />
                            </buttom>
                        </li>
                        <li>
                            <buttom className='SideBar__buttom' onClick={onClickHelp}>
                                <IosHelpCircle fontSize='40' color="#fff" style={{transition: '0.2s'}} />
                            </buttom>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}