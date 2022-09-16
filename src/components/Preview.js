import React from 'react';
import './Preview.css';
import './Preview.css';


export default function Preview({ head, chest, legs }) {
  return (
    <div>
      <div className='character-container'>
        <div className='head-container'>
          <img className='head-img' src={`${process.env.PUBLIC_URL}/armor/${head}.png`}/>
        </div>
        <div className='chest-container'>
          <img className='chest-img' src={`${process.env.PUBLIC_URL}/armor/${chest}.png`}/>
        </div>
        <div className='leg-container'>
          <img className='leg-img' src={`${process.env.PUBLIC_URL}/armor/${legs}.png`}/>
        </div>

      </div>
    </div>
  );
}
