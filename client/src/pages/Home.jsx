import React from 'react'
import './Home.css';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-20'>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gradient to-blue-100 from-blue-700'>Geez away with Me!</h1>
      <h2 className='text-2xl font-bold my-6 text-gray-500'>This is a dungeon for me to hide in!</h2>
      <h2 className='text-justify text-2xl font-bold my-6 text-black'> Grab your torch, sharpen your blade, and prepare for an unforgettable journey through the depths of life with me. Welcome to Geez - Exploring Dungeons & Delving into the Depths!</h2>
      <p className='text-justify text-lg text-gray-100 mx-auto leading-relaxed text-base mb-6 '>This blog is a window into my world, where I share my thoughts, experiences, and insights on various aspects of life. Join me on this personal journey as I navigate through the ups and downs, explore my passions, and reflect on the lessons learned along the way.
      Expect a diverse range of content that touches on topics such as personal growth, self-discovery, relationships, travel, and everything in between. I'll share stories, anecdotes, and musings that aim to entertain, inspire, and spark meaningful conversations.
      </p><p className='text-justify text-lg text-gray-100 mx-auto leading-relaxed text-base mb-4'>Through my blog, I hope to connect with readers who resonate with my experiences and perspectives. I believe in the power of storytelling and its ability to foster empathy, understanding, and connection. So, feel free to leave comments, share your own stories, and engage in discussions.
      Join me in embracing authenticity, vulnerability, and personal development. Together, let's explore the beauty of life's intricacies and find inspiration in the ordinary moments that shape us.
      </p>
        <button className=' hover:bg-gray-400 hover:backdrop-blur-4xl text-xl hover:text-red-500 hover:shadow-lg text-gray-200 font-bold py-2 px-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md'> Subscribe to my newsletter</button>
    </div>
    </>
  )
}

export default Home
