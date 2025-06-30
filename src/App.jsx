import React from 'react'
import Temp from "./components/Temp"; // ye temp Background.jsx hi hai
import Foreground from './components/Foreground';

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Temp />
      <Foreground />
      
       </div>
  )
}

export default App
