import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLICATIONS_DATA, PROJECTS_DATA } from '../data';
import { BookOpen, Award } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* Projects Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
           <div className="p-2 bg-primary-100 rounded-lg text-primary-700">
             <Award className="w-6 h-6" />
           </div>
           <h2 className="text-2xl font-bold text-gray-800">科研项目</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((proj) => (
            <Link to={`/projects/${proj.id}`} key={proj.id} className="block group">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-500 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{proj.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded font-medium flex-shrink-0 ${proj.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {proj.status === 'Ongoing' ? '进行中' : '已结项'}
                  </span>
                </div>
                <p className="text-sm text-primary-600 font-mono mb-3">{proj.duration}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{proj.description}</p>
                <div className="text-right">
                   <span className="text-xs font-semibold text-primary-500 group-hover:underline">查看详情 &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
           <div className="p-2 bg-primary-100 rounded-lg text-primary-700">
             <BookOpen className="w-6 h-6" />
           </div>
           <h2 className="text-2xl font-bold text-gray-800">代表性论著</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">年份</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">标题</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">作者</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">期刊/出版社</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {PUBLICATIONS_DATA.map((pub) => (
                  <tr key={pub.id} className="hover:bg-primary-50/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.year}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{pub.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.authors.join(', ')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 italic">{pub.journal}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                         {pub.type === 'Journal' ? '期刊论文' : pub.type === 'Book' ? '专著' : '会议论文'}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Research;