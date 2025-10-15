import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
function Sidebar() {
    const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] p-2 rounded flex flex-col justify-around'>
            <div onClick={() => navigate('/')} className='flex gap-2 items-center pl-8 cursor-pointer'>
                <img className='w-6 h-6' src={assets.home_icon} alt="home" />
                <p className='fon-bold'>Home</p>
            </div>
               <div className='flex gap-2 items-center pl-8 cursor-pointer'>
                <img className='w-6 h-6' src={assets.search_icon} alt="search" />
                <p className='fon-bold'>Search</p>
            </div>
        </div> 
        <div className='bg-[#121212] h-[70%] rounded'>
            <div className='flex gap-2 items-center p-4 justify-between'>
                <div className='flex gap-2 items-center'>
                    <img className='w-6 h-6' src={assets.stack_icon} alt="library" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-6' src={assets.arrow_icon} alt="arrow" />
                    <img className='w-6' src={assets.plus_icon} alt="arrow" />
                </div>
            </div>
            <div className='bg-[#242424] flex flex-col items-start  rounded font-semibold gap-2 p-4 m-4 '>
                <h1>
                    Create your first playlist
                </h1>
                <p className='text-sm text-gray-400'>It's easy, we'll help you</p>
                <button className='px-4 py-2 bg-white text-black rounded-full mt-4'>Create Playlist</button>
            </div>
             <div className='bg-[#242424] flex flex-col items-start  rounded font-semibold gap-2 p-4 m-4 '>
                <h1>
                    Let's find some podcasts to follow
                </h1>
                <p className='text-sm text-gray-400'>We'll keep you updated on new episodes</p>
                <button className='px-4 py-2 bg-white text-black rounded-full mt-4'>Browse Podcasts</button>
            </div>
    </div>
    </div>
  )
}

export default Sidebar;