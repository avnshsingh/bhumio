import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { RxRocket } from 'react-icons/rx';

import {
  FcDepartment,
  FcAssistant,
  FcFile,
  FcAutomatic,
  FcSettings,
  FcPrivacy,
  FcMoneyTransfer,
  FcDisplay,
} from 'react-icons/fc';

import '../App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='container'>
      <div className='search'>
        <RxRocket size={'4em'} />
        <div className='searchInputContainer'>
          <AiOutlineSearch />
          <input
            type='text'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder='Type your question here'
          />
        </div>
      </div>

      <div className='cardOuter'>
        <Card Icon={FcDepartment} text={'General'} navigateTo='general' />
        <Card
          Icon={FcAssistant}
          text={'Introduction'}
          navigateTo='introduction'
        />
        <Card Icon={FcFile} text={'Documentation'} navigateTo='documentation' />
        <Card
          Icon={FcAutomatic}
          text={'Account Setting'}
          navigateTo='account-setting'
        />
        <Card Icon={FcMoneyTransfer} text={'Pricing'} navigateTo='pricing' />
        <Card
          Icon={FcSettings}
          text={'Admin Setting'}
          navigateTo='admin-setting'
        />
        <Card
          Icon={FcPrivacy}
          text={'Privacy & Security'}
          navigateTo='privacy-security'
        />
        <Card Icon={FcDisplay} text={'Dashboard'} navigateTo='dashboard' />
      </div>
    </div>
  );
};

export default Home;

const Card = props => {
  const navigate = useNavigate();
  const { Icon, text, navigateTo } = props;
  return (
    <>
      <div
        className='card'
        onClick={() =>
          navigate(`/${navigateTo}`, { state: { screen: navigateTo } })
        }
      >
        <Icon size={'3em'} />
        <p>{text}</p>
      </div>
    </>
  );
};
