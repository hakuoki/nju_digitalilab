import React from 'react';
import { MEMBERS_DATA, ADVISORS_DATA } from '../data';

const People: React.FC = () => {
  return (
    <div>
       <div className="bg-primary-900 text-white py-12 px-6 rounded-xl mb-10 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">研究团队</h1>
        <p className="text-primary-200">汇聚多学科背景的优秀学者</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MEMBERS_DATA.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 relative">
            {member.personalPage && (
              <a 
                href={member.personalPage} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-10"
                title="访问个人主页"
              />
            )}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 h-64">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                 <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium text-sm mb-4">{member.title}</p>
                 </div>
                 {member.personalPage && (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                   </svg>
                 )}
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">研究方向</p>
                <div className="flex flex-wrap gap-2">
                  {member.researchInterests.map((interest, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-md border border-primary-100">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-16"></div>

      <div className="bg-primary-900 text-white py-12 px-6 rounded-xl mb-10 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">学术顾问</h1>
        <p className="text-primary-200">为实验室发展提供学术指导</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {ADVISORS_DATA.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 relative">
            {member.personalPage && (
              <a 
                href={member.personalPage} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-10"
                title="访问个人主页"
              />
            )}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 h-64">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                 <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium text-sm mb-4">{member.title}</p>
                 </div>
                 {member.personalPage && (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                   </svg>
                 )}
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">研究方向</p>
                <div className="flex flex-wrap gap-2">
                  {member.researchInterests.map((interest, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-md border border-primary-100">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;