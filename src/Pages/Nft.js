import React from 'react';
import Cards from '../Components/Cards/NftCard';
import Carousel from 'react-elastic-carousel';
import './Nft.css';
import NftModal from '../Components/Add_Nft_modal/NftModal';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Nft() {
  return (
    <>
    <div className='main-nft'>
    <NftModal/>
    <div className='title-nft-carousel'>Explore</div>
    <Carousel breakPoints={breakPoints}>
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    </Carousel>

    <div className='title-nft-carousel'>Buy</div>
    <Carousel breakPoints={breakPoints}>
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    <Cards Creator='Creator' Value='1.15ETH' />
    </Carousel>
    </div>
    </>
  );
}

export default Nft;