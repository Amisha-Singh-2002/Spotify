import React from 'react'
import{ useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
const SongItem = ({image,name, desc,id}) => {
  const {playWithId} = useContext(PlayerContext);
 
  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt=""/>
        <p className='font-semibold mt-2 mb-1'>{name}</p>
        <p className='text-sm text-[#b3b3b3]'>{desc}</p>
    </div>
  )
}

export default SongItem