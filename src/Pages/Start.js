import React from 'react';
import Cards from '../Components/Cards/StarterCards';
import logo from '../Assets/logo.png';
import {Route, IndexRoute} from 'react-router';
import Dapp from './Dapp';
import Donation from './Donation';
import Nft from './Nft';
import './Start.css';

function Start() {
  return (
    <><Route>
      <div className='main-start'>
      <img src={logo} className='welcome-ethereonite'/>
      <div className='welcome-start'>Welcome to Eternity</div>
      <div className='start-grid'>
      <Route component={Dapp} path='/Dapp'/>
      <Cards  Title='Dapp' Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem erat, ullamcorper at sagittis quis, porta quis tellus. In gravida at justo porta lacinia. Nullam lobortis, velit vel elementum condimentum, nisl elit lobortis enim, ultrices tincidunt nulla velit sit amet ex. Donec et ligula nec ante ultricies cursus at ac nisl.'/>
      
      <Route component={Nft} path='/NFT'/>
      <Cards Title='NFT' Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem erat, ullamcorper at sagittis quis, porta quis tellus. In gravida at justo porta lacinia. Nullam lobortis, velit vel elementum condimentum, nisl elit lobortis enim, ultrices tincidunt nulla velit sit amet ex. Donec et ligula nec ante ultricies cursus at ac nisl.'/>
      
      <Route component={Donation} path='/Donation'/>
      <Cards Title='Crowd Fund' Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem erat, ullamcorper at sagittis quis, porta quis tellus. In gravida at justo porta lacinia. Nullam lobortis, velit vel elementum condimentum, nisl elit lobortis enim, ultrices tincidunt nulla velit sit amet ex. Donec et ligula nec ante ultricies cursus at ac nisl.'/>
      
      </div>
      </div>
      </Route>
    </>
  );
}

export default Start;