import React from 'react'
import './error.css'

const Error = () => {
  return (
    <div className='error-container'>
        <div class="flex justify-center">
          <img src="\src\assets\error.png" alt="error" className="my-6 h-50 w-46 hover:opacity-90" />
        </div>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-200'>
        404: Page Not found!
      </h1>
      
    </div>
  )
}

export default Error
