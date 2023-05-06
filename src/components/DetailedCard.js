import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { HiOutlineDocumentText } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const DetailedCard = () => {
  const { state } = useLocation();
  const [question, setQuestion] = useState(state.single.name);
  const [subTopics, setSubTopics] = useState();

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  useEffect(() => {
    const getAllSubTopics = async () => {
      const result = await axios.get('http://localhost:4000/sub-topics');
      setSubTopics(result.data);
    };
    getAllSubTopics();
  }, []);

  return (
    <>
      {!subTopics ? (
        <>
          <div className='loader'>
            <h1>Loading...</h1>
          </div>
        </>
      ) : (
        <>
          <div className='cardWrapper'>
            {/* bread crumbs */}
            <div className='breadcrumbs' style={{ marginTop: '5%' }}>
              {pathnames.map((name, index) => {
                const isLast = index === pathnames.length - 1;
                const decodedTopicName = decodeURIComponent(
                  name.replace(/\+/g, ' ')
                );

                return isLast ? (
                  <span key={index}>{decodedTopicName}</span>
                ) : (
                  <span key={index}>Home &gt; {decodedTopicName} &gt; </span>
                );
              })}
            </div>
            {/* end */}
            <div className='cardContainer'>
              <div className='infoContainer'>
                <h3>{question}</h3>
                {subTopics.map((item, index) => {
                  return (
                    <div key={index}>
                      {question === item.name && <p>{item.description}</p>}
                    </div>
                  );
                })}
              </div>
              <div className='subTopicContainer'>
                {state.total.subtopics.map((item, index) => (
                  <div
                    className='iconSubTopic'
                    key={index}
                    onClick={() => setQuestion(item.name)}
                  >
                    <HiOutlineDocumentText size={'2em'} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailedCard;
