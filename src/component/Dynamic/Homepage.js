// src/components/Homepage.js
import React, { useEffect, useState } from 'react';
import { getLocalStorageData } from '../../common/localStorage';

const Homepage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch content from local storage on component mount
    const data = getLocalStorageData('homepageContent');
    setContent(data);
  }, []);

  return (
    <div className="container mx-auto">
      {content.map((item, index) => (
        <div key={index} className="mb-6">
          {/* <h2 className="text-2xl font-bold mb-2">{item.title}</h2> */}
          <img src={item.image} alt={item.title} className="w-full h-auto mb-2" />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
