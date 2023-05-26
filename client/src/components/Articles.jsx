import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className='p-4 md:w-1/3'>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-opacity-100 hover:shadow-white-lg hover:transform hover:scale-105'style={{
              transition: 'transform 0.3s, box-shadow 0.3s',
            }} >
            <Link to={`/article/${article.name}`}>
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center '
                src={article.thumbnail}
                alt='blog'
                style={{
                  transition: 'opacity 0.3s',
                }}
              />
            </Link>
            
            <div className='p-6 'style={{
                position: 'relative',
                backdropFilter: 'blur(8px)',
                transition: 'backdrop-filter 0.3s',
              }}>
              <Link key={index} to={`/article/${article.name}`}>
                <h3 className='text-lg font-medium text-gray-200 mb-3'>
                  {article.title}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;