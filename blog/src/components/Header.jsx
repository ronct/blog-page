import React from 'react'
import logo from './../assets/Images/logo.png';
import { FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <img src= {logo} className='w-[180px]' />
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold font-bold cursor-pointer text-[25px]'>Home</li>
            <li className='hover:font-bold font-bold cursor-pointer text-[25px]'>About Me</li>                        
        </ul>
        <button className='bg-slate-100 rounded-full text-black flex items-center'>
            Subscribe <FaYoutube className='ml-3 text-[40px]' />
        </button>
    </div>
  )
}

export default Header