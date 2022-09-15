import React from 'react';
import './Preview.css';
import './Preview.css';


export default function Preview() {
  return (
    <div>
      <div className='character-container'>
        <div className='head-container'>
          <img className='head-img' src={`${process.env.PUBLIC_URL}/armor/Briar Helm.png`}/>
        </div>
        <div className='chest-container'>
          <img className='chest-img' src={`${process.env.PUBLIC_URL}/armor/Elden Lord Chest Plate.png`}/>
        </div>
        <div className='leg-container'>
          <img className='leg-img' src={`${process.env.PUBLIC_URL}/armor/Malenias Greaves.png`}/>
        </div>

      </div>
    </div>
  );
}
