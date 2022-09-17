import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead, chest, setChest, legs, setLegs, oathArr, setOathArr, oath, setOath, setHideImg, headCount, setHeadCount, chestCount, setChestCount, legCount, setLegCount }) {

 
  

  return (
    <div>
      <div className='inputs'>
        <label>Helm</label>
        <select value={head} onChange={(e) => {setHead(e.target.value),
        setHeadCount((prevState) => prevState + 1
        ); 
        setHideImg((prevState) => {
          return { ...prevState, one: false };}); }}>
          <option >Choose your warriors helm</option>
          <option>Briar Helm</option>
          <option>Elden Lord Crown</option>
          <option>Scaled Helm</option>
        </select>
        <label>Chest Armor</label>
        <select value={chest} onChange={(e) => {setChest(e.target.value),
        setChestCount((prevState) => prevState + 1
        ); 
        setHideImg((prevState) => {
          return { ...prevState, two: false }; 
        }); }}>
          <option value={chest}>Choose your warriors chest armor</option>
          <option>All Knowing</option>
          <option>Elden Lord Chest Plate</option>
          <option>Malikeths Chest Plate</option>
        </select>
        <label>Greaves</label>
        <select value={legs} onChange={(e) => {setLegs(e.target.value),
        setLegCount((prevState) => prevState + 1
        ); 
        setHideImg((prevState) => {
          return { ...prevState, three: false }; 
        }); }}>
          <option value={legs}>Choose your warriors greaves</option>
          <option>Malenias Greaves</option>
          <option>Elden Lord Greaves</option>
          <option>Malikeths Greaves</option>
        </select>
        <label>Make an Oath</label>
        <textarea type='text' name='Oath' value={oath} onChange={(e) => setOath(e.target.value)}/>
        <button onClick={() => { return setOathArr([...oathArr, oath]), setOath(''); }}>Add Oath</button>
        <p className='record'>You have changed your helm {headCount} times, your chest armor {chestCount} times and your greaves {legCount} times</p>
      </div>
      
        
    </div>
    
  );
}
