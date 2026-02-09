import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { NEWS_DATA } from '../data';
import { ChevronLeft, Calendar, Tag } from 'lucide-react';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = NEWS_DATA.find((item) => item.id === id);

  if (!newsItem) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link to="/news" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6 transition-colors font-medium">
        <ChevronLeft className="w-5 h-5 mr-1" />
        返回列表
      </Link>

      {/* Content Container */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-primary-50">
        {/* Header */}
        <div className="bg-primary-50/50 p-8 border-b border-primary-100">
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
             <span className={`inline-flex items-center px-3 py-1 rounded-full font-medium ${
               newsItem.category === 'Event' ? 'bg-orange-100 text-orange-700' : 
               newsItem.category === 'Notice' ? 'bg-red-100 text-red-700' : 
               'bg-primary-100 text-primary-700'
             }`}>
               <Tag className="w-3 h-3 mr-2" />
               {newsItem.category === 'Event' ? '会议' : newsItem.category === 'Notice' ? '通知' : '新闻'}
             </span>
             <span className="inline-flex items-center text-gray-500">
               <Calendar className="w-4 h-4 mr-2" />
               {newsItem.date}
             </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">{newsItem.title}</h1>
        </div>

        {/* Article Body */}
        <div className="p-8 md:p-12">
           {/* 
             Using dangerouslySetInnerHTML allows rendering HTML content stored in data.ts.
             This is suitable for a simple template where you control the data.
             For formatting, we use Tailwind typography-like utility classes or standard tags.
           */}
           <div 
             className="prose prose-primary max-w-none text-gray-800 leading-loose space-y-4"
             dangerouslySetInnerHTML={{ __html: newsItem.content || `<p>${newsItem.summary}</p>` }}
           />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;