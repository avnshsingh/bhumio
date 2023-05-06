import React, { useEffect, useState } from 'react';
import '../App.css';
import Expandle from '../components/Expandle';

import { AiOutlineSearch } from 'react-icons/ai';
import { RxRocket } from 'react-icons/rx';

import axios from 'axios';

const General = () => {
  const [topics, setTopics] = useState();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getAllTask = async () => {
      const result = await axios.get('http://localhost:4000/tasks');
      setTopics(result.data);
    };
    getAllTask();
  }, []);

  return (
    <>
      {!topics ? (
        <>
          <div className='loader'>
            <h1>Loading...</h1>
          </div>
        </>
      ) : (
        <>
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
          </div>
          <Expandle items={topics} />
        </>
      )}
    </>
  );
};

export default General;
