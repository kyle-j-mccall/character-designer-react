import React from 'react';
import './Main.css';
import background from '../elden-background.webp';
import Editor from './Editor.js';
import Preview from './Preview.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Editor/>
      <Preview/>
    </main>
  );
}
