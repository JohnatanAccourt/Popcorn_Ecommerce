import React, { useState } from 'react';
import './styles/globalStyle.css';

import SideBarComponent from './components/SideBar/SideBarComponent';
import HomeComponent from './components/Home/HomeComponent';
import StoreComponent from './components/Store/StoreComponent';
import CartComponent from './components/Cart/CartComponent';

function App() {
    const [page, setPage] = useState('home');
    const [homeAnimation, setHomeAnimation] = useState(false);
    const [storeAnimation, setStoreAnimation] = useState(false);
    const [helpAnimation, setHelpAnimation] = useState(false);

    const [cartModal, setCartModal] = useState(false);

    function handleAnimation(pg){
        switch(pg){
            case('store'):
                setStoreAnimation(false);
                setHomeAnimation(true);
                break;

            case('home'):
                setStoreAnimation(true);
                setHomeAnimation(false);
                break;

            default:
                setStoreAnimation(false);
                setHomeAnimation(false);
                break;
        }
    }

    return (
      <div className="App">
          <CartComponent modal={!cartModal} closeModal={() => setCartModal(false)} />

          <SideBarComponent
            side='left' 
          />

          {page === 'home' ?
              <HomeComponent animationOn={homeAnimation} />:
          page === 'store' ?
              <StoreComponent animationOn={storeAnimation} />:
              <HomeComponent />
          }

          <SideBarComponent 
              side='right'
              onClickCart={() => setCartModal(true)}
              onClickHome={() => [setTimeout(() => {setPage('home')}, 2500) , handleAnimation('home')]}
              onClickStore={() => [setTimeout(() => {setPage('store')}, 2500), handleAnimation('store')]}
              onClickHelp={() => {}} 
          />

      </div>
    );
}

export default App;
