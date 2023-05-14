import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-800 rounded-lg">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <a href="#" className="text-white text-lg font-bold">Logo</a>
        <div class="ml-6 space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/list" className="text-gray-300 hover:text-white">Articles</Link>
        </div>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-gray-300 hover:text-white mr-4">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-18a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm4 11a1 1 0 0 0 1-1v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 9 13.5V15a1 1 0 0 0 2 0v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V15a1 1 0 0 0 1 1z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</nav>

      
      </>
  )
}

export default Navbar
