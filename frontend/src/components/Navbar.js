import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between border-b border- bg-black text-white p-6 items-center'>
      <Link to='/'><h2 className='text-3xl text-bold text-blue-600 font-bold'>KALANET BLOGS</h2></Link>
      <ul className='flex gap-7'>
        <Link to='/createblog'><li>Create a Blog</li></Link>
        <li>Features</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar