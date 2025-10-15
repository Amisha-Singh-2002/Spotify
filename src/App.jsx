import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'
function App() {
  const {audioRef, track} = useContext(PlayerContext);
  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display/>
      </div>
      <Player/>
  <audio ref={audioRef} src={track.file} preload="audio" className='w-0 h-0'></audio>
    </div>
  )
}

export default App