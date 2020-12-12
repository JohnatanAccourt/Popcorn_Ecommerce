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

    function handleAnimation(){
        setHomeAnimation(!homeAnimation);
        setStoreAnimation(!storeAnimation);
    }

    return (
      <div className="App">

          <SideBarComponent
            side='left' 
          />
          {/* <CartComponent /> */}

          {
          page === 'home' ?
              <HomeComponent animationOn={homeAnimation} />:
          page === 'store' ?
              <StoreComponent animationOn={storeAnimation} />:
              <HomeComponent />
          }

          <SideBarComponent 
              side='right'
              onClickCart={() => {}}
              onClickHome={() => [setTimeout(() => {setPage('home')}, 2500) , handleAnimation()]}
              onClickStore={() => [setTimeout(() => {setPage('store')}, 2500), handleAnimation()]}
              onClickHelp={() => {}} 
          />

      </div>
    );
}

export default App;
