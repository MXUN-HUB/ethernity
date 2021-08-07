import React from 'react';
import DonationModal from '../Components/Add_donations_modal/DonarionsModal';
import './Donation.css';

function Donation() {
  return (
    <>
    
    <div className='dashboard-padding-left'>
    <div className='negative-dashboard-padding-left'>
    <DonationModal/>
    </div>
    <div className='container-donation'>
      <div className='title-donation'>COVID - 19 PANDEMIC</div>
      <div className='content-donation'>Each death to COVID is a tragedy that could have been avoided. With the vicious second wave of coronavirus wreaking havoc across India, the daily fatality number has now crossed 2,500+ and is expected to rise in the coming weeks.</div>
      <button className='button-donation'>DONATE TO HELP PEOPLE</button>
      </div>

      <div className='container-donation'>
      <div className='title-donation'>Funds for XYZ</div>
      <div className='content-donation'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id interdum velit. Sed non augue pulvinar, rhoncus enim nec, elementum lacus. Pellentesque ultricies auctor magna quis aliquam. Maecenas cursus ipsum eget</div>
      <button className='button-donation'>DONATE TO HELP PEOPLE</button>
      </div>
      </div>
    </>
  );
}

export default Donation;