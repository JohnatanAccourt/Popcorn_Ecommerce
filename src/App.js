import React, { useState } from 'react';
import './styles/globalStyle.css';

import SideBarComponent from './components/SideBar/SideBarComponent';
import HomeComponent from './components/Home/HomeComponent';
import StoreComponent from './components/Store/StoreComponent';
// import CartComponent from './components/SideBar/CartComponent';

function App() {

    const [page, setPage] = useState('home');

    return (
      <div className="App">

          <SideBarComponent
            side='left' 
          />
          {/* <CartComponent /> */}

          {
          page === 'home' ?
              <HomeComponent />:
          page === 'store' ?
              <StoreComponent />:
              <HomeComponent />
          }

          <SideBarComponent 
              side='right'
              onClickCart={() => {}}
              onClickHome={() => setPage('home')}
              onClickStore={() => setPage('store')}
              onClickHelp={() => {}} 
          />

      </div>
    );
}

export default App;
