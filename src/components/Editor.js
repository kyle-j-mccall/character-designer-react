import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead, chest, setChest, legs, setLegs }) {
  return (
    <div>
      <div className='inputs'>
        <label>Helm</label>
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option selected>Choose your warriors helm</option>
          <option>Briar Helm</option>
          <option>Elden Lord Crown</option>
          <option>Scaled Helm</option>
        </select>
        <label>Chest Armor</label>
        <select value={chest} onChange={(e) => setChest(e.target.value)}>
          <option selected>Choose your warriors chest armor</option>
          <option>All Knowing</option>
          <option>Elden Lord Chest Plate</option>
          <option>Malikeths Chest Plate</option>
        </select>
        <label>Greaves</label>
        <select value={legs} onChange={(e) => setLegs(e.target.value)}>
          <option selected>Choose your warriors greaves</option>
          <option>Malenias Greaves</option>
          <option>Elden Lord Greaves</option>
          <option>Malikeths Greaves</option>
        </select>
        <label>Make an Oath</label>
        <textarea type='text' name='Oath'/>
        <p className='record'>You have changed your helm 0 times, your chest armor 0 times and your greaves 0 times</p>
      </div>
      
        
    </div>
  );
}
