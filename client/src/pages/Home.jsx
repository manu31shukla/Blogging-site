import React from 'react'
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
    <br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="flex justify-center">
    <div className="flex items-center">
    <a href="About" className=' hover:bg-blue-500 hover:backdrop-blur-4xl text-xl hover:text-white hover:shadow-lg text-blue-300 font-bold py-2 px-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md mr-50'>About</a>
    <a href="list" className=' hover:bg-blue-500 hover:backdrop-blur-4xl text-xl hover:text-white hover:shadow-lg text-blue-300 font-bold py-2 px-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md mr-50'>Posts</a>
    <a href="Contact" className=' hover:bg-blue-500 hover:backdrop-blur-4xl text-xl hover:text-white hover:shadow-lg text-blue-300 font-bold py-2 px-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md'>Contact</a>
     </div>
    </div><br/><br/><br/><br/><br/>
    <div>
      <h1 className='text-2xl font-bold my-6 text-blue-400 mr-5'>This is a dungeon for me to hide in!</h1>
      <h2 className='text-justify text-2xl font-bold my-6 text-yellow-200 mx-32'> Grab your torch, sharpen your blade, and prepare for an unforgettable journey through the depths of life with me. Welcome to Geez - Exploring Dungeons & Delving into the Depths!</h2>
      <br/><br/>
        <button className=' hover:bg-blue-500 hover:backdrop-blur-4xl text-xl hover:text-white hover:shadow-lg text-blue-300 font-bold py-2 px-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md'> Subscribe to my newsletter</button>
        <br/><br/><br/>
    </div>
    </div>
  )
}

export default Home
