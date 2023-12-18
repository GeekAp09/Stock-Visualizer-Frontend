import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Comp.css"

const CircleComponent = () => {
  const [circleData, setCircleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Update the URL to the localhost:3000/data endpoint
        const response = await axios.get('https://stock-visualizer-backend.vercel.app/data');
        console.log(response.data)

        setCircleData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className='circle-wrapper'>
      {circleData.map((item) => (
        
        <div className="circle">
          <div className="name">{item.symbol_name}</div>
          <div className="price">{item.last_trade_price}</div>
          <div className="change">{item.change_per}</div>
          </div>
        ))}
    </div>
  );
};

export default CircleComponent;
