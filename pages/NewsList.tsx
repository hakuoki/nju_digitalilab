import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_DATA } from '../data';

const NewsList: React.FC = () => {
  // Create a sorted copy of the news data (newest first)
  const sortedNews = [...NEWS_DATA].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto">
       <h1 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-primary-600 pl-4">新闻动态</h1>
       
       <div className="space-y-6">
         {sortedNews.map((item) => {
           const content = (
             <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-4 group-hover:border-primary-200">
                <div className="md:w-32 flex-shrink-0 flex flex-col text-center justify-center bg-primary-50 rounded p-2 group-hover:bg-primary-100 transition-colors">
                   <span className="text-sm text-gray-500">{item.date.split('-')[0]}</span>
                   <span className="text-xl font-bold text-primary-700">{item.date.split('-').slice(1).join('/')}</span>
                </div>
                <div className="flex-grow">
                   <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded border ${
                        item.category === 'Event' ? 'border-orange-200 text-orange-600 bg-orange-50' :
                        item.category === 'Notice' ? 'border-red-200 text-red-600 bg-red-50' :
                        'border-primary-200 text-primary-600 bg-primary-50'
                      }`}>
                        {item.category}
                      </span>
                   </div>
                   <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                   {item.summary && <p className="text-gray-600 text-sm line-clamp-2">{item.summary}</p>}
                   <span className="text-primary-500 text-sm font-medium mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                     {item.link ? '访问链接' : '阅读详情'} &rarr;
                   </span>
                </div>
             </div>
           );

           return item.link ? (
             <a href={item.link} key={item.id} target="_blank" rel="noopener noreferrer" className="block group">
               {content}
             </a>
           ) : (
             <Link to={`/news/${item.id}`} key={item.id} className="block group">
               {content}
             </Link>
           );
         })}
       </div>
    </div>
  );
};

export default NewsList;