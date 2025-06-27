import { useState } from 'react';
import Footer from './Footer.jsx';
import Events from './Events.jsx';

import './App.css'
import Portfolio from './Portfolio.jsx';
import Achievements from './Achievements.jsx';

function App() {
 

  return (
    <>
     <section className='footer bg-[#222222]'><Footer/></section>
     <section className='portfolio bg-white'><Portfolio/></section>
     <section className='acheivements bg-white '><Achievements/></section>
     <section className='events bg-white'><Events/></section>
    </>
  )
}

export default App
