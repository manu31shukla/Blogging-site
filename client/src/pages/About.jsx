import React from 'react'
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
    <div className='flex justify-center h-screen'>
    <div className='bg-red-100 bg-opacity-10'>
      
      <br/><br/><br/>
      <p  className='mx-5 text-justify text-lg text-gray-100 mx-auto leading-relaxed text-base mb-6 '>This blog is a window into my world, where I share my thoughts, experiences, and insights on various aspects of life. Join me on this personal journey as I navigate through the ups and downs, explore my passions, and reflect on the lessons learned along the way.
      Expect a diverse range of content that touches on topics such as personal growth, self-discovery, relationships, travel, and everything in between. I'll share stories, anecdotes, and musings that aim to entertain, inspire, and spark meaningful conversations.
      </p><p className='mx-5 text-justify text-lg text-gray-100 mx-auto leading-relaxed text-base mb-4'>Through my blog, I hope to connect with readers who resonate with my experiences and perspectives. I believe in the power of storytelling and its ability to foster empathy, understanding, and connection. So, feel free to leave comments, share your own stories, and engage in discussions.
      Join me in embracing authenticity, vulnerability, and personal development. Together, let's explore the beauty of life's intricacies and find inspiration in the ordinary moments that shape us.
      </p>
      <p className='mx-5 text-justify text-lg text-gray-100 mx-auto leading-relaxed text-base mb-4'>You can also follow me on social media to stay connected and join a community of like-minded individuals.</p><br/><br/><br/>
      
      

      <button className=' hover:bg-blue-500 hover:backdrop-blur-4xl text-xl hover:text-white hover:shadow-lg text-blue-300 font-bold py-2 px-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md'>Subscribe to my newsletter</button>
      <br/><br/>
      <div class="flex justify-center space-x-8">
      <a href="https://github.com/manu31shukla" target="_blank" rel="noopener noreferrer">
      <img src="src/assets/github-logo.png" alt="Github Logo" class="h-9 w-9 hover:shadow-md hover:scale-110"/>
      </a>
      <a href="https://www.instagram.com/_31122001_/" target="_blank" rel="noopener noreferrer">
      <img src="src/assets/instagram-logo.png" alt="Instagram Logo" class="h-8 w-8 hover:shadow-md hover:scale-110"/>
      </a>
      <a href="https://www.linkedin.com/in/manu31shukla/" target="_blank" rel="noopener noreferrer">
      <img src="src/assets/linkedin-logo.png" alt="LinkedIn Logo" class="h-8 w-8 hover:shadow-md hover:scale-110"/>
      </a>
     </div>
    
    </div>
    </div>
    </div>
  )
}

export default About
