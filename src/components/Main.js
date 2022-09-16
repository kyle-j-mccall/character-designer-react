import React from 'react';
import './Main.css';
import background from '../elden-background.webp';
import Editor from './Editor.js';
import Preview from './Preview.js';
import { useState } from 'react';



export default function Main() {

  const [head, setHead] = useState('');
  const [chest, setChest] = useState('');
  const [legs, setLegs] = useState('');
  const [oath, setOath] = useState('');
  const [oathArr, setOathArr] = useState([]);
  const [hideImg, setHideImg] = useState({ one: true, two: true, three: true });
  const [headCount, setHeadCount] = useState(0);
  const [chestCount, setChestCount] = useState(0);
  const [legCount, setLegCount] = useState(0);

  console.log(headCount);



  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Editor head={head} setHead={setHead} 
        chest={chest} setChest={setChest} 
        legs={legs} setLegs={setLegs} 
        oathArr={oathArr} setOathArr={setOathArr} 
        oath={oath} setOath={setOath} 
        hideImg={hideImg} setHideImg={setHideImg} 
        headCount={headCount} setHeadCount={setHeadCount} 
        chestCount={chestCount} setChestCount={setChestCount} 
        legCount={legCount} setLegCount={setLegCount} 
      />
      <Preview head={head} chest={chest} legs={legs} oathArr={oathArr} hideImg={hideImg}/>
    </main>
  );
}
