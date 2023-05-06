import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../App.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Expandle(props) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const navigate = useNavigate();

  const { state } = useLocation();

  const { screen } = state;

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const { items } = props;
  const handleItemClick = index => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const handleExpandedItemClick = (name, subTopic, item) => {
    const updateScreen = screen.toLowerCase();
    const updateItem = name.toLowerCase();
    // redirect to home page
    navigate(`/${updateScreen}/${updateItem}`, {
      state: { total: item, single: subTopic },
    });
  };

  return (
    <div className='container'>
      {/* bread crumbs */}
      <div className='breadcrumbs'>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <p key={name}>Browse topics - Home &gt; {name} </p>
          ) : (
            <Link key={name} to={routeTo}>
              {name}
            </Link>
          );
        })}
      </div>
      {/* end */}
      {items.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(index)}>
          <div className='topic'>
            <div className='topicInner'>
              <p>{item.name}</p>
              <MdKeyboardArrowDown />
            </div>
            {expandedIndex === index && (
              <>
                {item.subtopics.map((subTopic, index) => (
                  <div
                    className='subTopic'
                    onClick={() =>
                      handleExpandedItemClick(item.name, subTopic, item)
                    }
                    key={index}
                  >
                    <p>{subTopic.name}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
