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

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Editor head={head} setHead={setHead} chest={chest} setChest={setChest} legs={legs} setLegs={setLegs} />
      <Preview head={head} chest={chest} legs={legs}/>
    </main>
  );
}
