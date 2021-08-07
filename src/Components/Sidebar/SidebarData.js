import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <AiIcons.AiFillHome style={{ color: "#848B93" }}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#848B93" }}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#848B93" }}/>,

  },
  {
    title: 'Dapp',
    path: '/Dapp',
    icon: <FaIcons.FaBitcoin style={{ color: "#848B93" }}/>,
    iconHover: <RiIcons.RiArrowDownSFill style={{ color: "#000000" }}/>,
   
  },
  {
    title: 'NFT',
    path: '/NFT',
    icon: <IoIcons.IoIosPaper style={{ color: "#848B93" }}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#848B93" }}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#848B93" }}/>,

  },
  {
    title: 'Donate',
    path: '/Donation',
    icon: <FaIcons.FaHandHoldingHeart style={{ color: "#848B93" }}/>
  },
  {
    title: 'Team',
    path: '/Team',
    icon: <IoIcons.IoMdPeople style={{ color: "#848B93" }}/>
  },
  
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle style={{ color: "#848B93" }}/>
  }
];