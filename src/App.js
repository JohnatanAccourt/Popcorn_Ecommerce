import React, { useState } from 'react';
import './styles/globalStyle.css';

import SideBarComponent from './components/SideBar/SideBarComponent';
import HomeComponent from './components/Home/HomeComponent';
import StoreComponent from './components/Store/StoreComponent';
// import CartComponent from './components/SideBar/CartComponent';

function App() {
    const [page, setPage] = useState('home');
    const [homeAnimation, setHomeAnimation] = useState(false);
    const [storeAnimation, setStoreAnimation] = useState(false);
    const [helpAnimation, setHelpAnimation] = useState(false);

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

          <SideBarComponent
            side='left' 
          />
          {/* <CartComponent /> */}

          {page === 'home' ?
              <HomeComponent animationOn={homeAnimation} />:
          page === 'store' ?
              <StoreComponent animationOn={storeAnimation} />:
              <HomeComponent />
          }

          <SideBarComponent 
              side='right'
              onClickCart={() => {}}
              onClickHome={() => [setTimeout(() => {setPage('home')}, 2500) , handleAnimation('home')]}
              onClickStore={() => [setTimeout(() => {setPage('store')}, 2500), handleAnimation('store')]}
              onClickHelp={() => {}} 
          />

      </div>
    );
}

export default App;
