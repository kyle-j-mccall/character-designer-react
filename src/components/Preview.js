import React from 'react';
import './Preview.css';
import './Preview.css';


export default function Preview({ head, chest, legs, oathArr, hideImg }) {
  
  return (
    <div>
      <div className='preview-container'>
        <div className='oath-container'>
          <h3>Sworn Oaths</h3>
          <ul className='oath'>{oathArr.map((oath) => (<li key={oath}>{oath}</li>))}</ul>
        </div>
        <div className='character-container'>
          <div className='head-container'>
            <img className={hideImg.one ? 'hidden' : 'head-img'} src={`${process.env.PUBLIC_URL}/armor/${head}.png`}/>
            
          </div>
          <div className='chest-container'>
            <img className={hideImg.two ? 'hidden' : 'chest-img'} src={`${process.env.PUBLIC_URL}/armor/${chest}.png`}/>
          </div>
          <div className='leg-container'>
            <img className={hideImg.three ? 'hidden' : 'leg-img'} src={`${process.env.PUBLIC_URL}/armor/${legs}.png`}/>
          </div>
        </div>
        

      </div>
    </div>
  );
}
