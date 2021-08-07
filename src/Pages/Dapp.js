import React from 'react';
import Cards from '../Components/Cards/DappCards';
import BlockTable from '../Components/Cards/DappTableBlock';
import Chart from '../Components/Charts/Chart'
import './Dapp.css';

function Dapp() {
  return (
    <>
    <div className='dapp-main'>
    <div className='dapp-grid'>
    <div>
    <Cards Title='Title' Content='$68623'/>
    <Cards Title='Title' Content='$68623'/>
    </div>
    <div>
    <Cards Title='Title' Content='$68623'/>
    <Cards Title='Title' Content='$68623'/>
    </div>
    <div className='charts'>
    <div ><Chart/></div>
       
    </div>
    </div>
    <div className='dapp-grid-blocks'>
    <div>
    <BlockTable /></div>
    <div>
    <BlockTable/></div>
    </div>
    </div>

    </>
  );
}

export default Dapp;