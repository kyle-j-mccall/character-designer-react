import React from 'react';
import './Header.css';
import background from '../gold.jpg';

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      Tarnished Warrior Builder
    </header>
  );
}
