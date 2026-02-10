import React from 'react';
import { Link } from 'react-router-dom';
import { GROUPS_DATA, PROJECTS_DATA } from '../data';
import { BookOpen, Award, ExternalLink, ArrowRight, Users } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* 数智文献处理平台 Platform Section */}
      <section className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className="md:flex h-full">
           <a href="https://www.digitalilab.cn/" target="_blank" rel="noopener noreferrer" className="md:w-5/12 relative overflow-hidden h-64 md:h-auto block">
             <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
             <img 
               src="/images/LAB.png" 
               alt="数智文献处理平台" 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000';
               }}
             />
           </a>
           
           <div className="md:w-7/12 p-8 flex flex-col justify-center">
             <div className="mb-6">
               <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full mb-3">核心平台</span>
               <a href="https://www.digitalilab.cn/" target="_blank" rel="noopener noreferrer" className="block group/title">
                 <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover/title:text-primary-700 transition-colors">数智文献处理平台</h2>
               </a>
               <p className="text-gray-600 leading-relaxed text-lg">
                 依托南京大学数智文献实验室，提供AI赋能的OCR、翻译、编目、数据库建设功能，为新一代数字人文研究与合作共建提供强大的基础设施支持。
               </p>
             </div>
             
             <div className="flex flex-wrap gap-4 mt-auto pt-4">
               <a href="https://my.feishu.cn/wiki/WV1rwzRICiMXeAkeTUEcuHSun5g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow hover:shadow-md">
                 查阅用户手册
                 <BookOpen className="w-4 h-4 ml-2" />
               </a>
               <a href="https://mp.weixin.qq.com/s/FHZZHNdAK0QPMy1bgPYqRg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 hover:text-primary-600 transition-colors">
                 功能介绍
                 <ExternalLink className="w-4 h-4 ml-2" />
               </a>
             </div>
           </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-primary-100 rounded-lg text-primary-700">
               <Award className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-bold text-gray-800">学术社区</h2>
          </div>
          <p className="text-gray-500 ml-12">
            汇聚多学科力量，探索数字人文前沿领域，推动历史研究范式创新。
          </p>
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{proj.description}</p>
                <div className="text-right mt-auto">
                   <span className="text-xs font-semibold text-primary-500 group-hover:underline inline-flex items-center">
                     查看详情 <ArrowRight className="w-3 h-3 ml-1" />
                   </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Groups Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
           <div className="p-2 bg-primary-100 rounded-lg text-primary-700">
             <Users className="w-6 h-6" />
           </div>
           <h2 className="text-2xl font-bold text-gray-800">全部公开群组</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-6 divide-y divide-gray-100">
            {GROUPS_DATA.map((group, index) => (
              <div key={group.id} className={`flex flex-col md:flex-row md:items-start justify-between group ${index !== 0 ? 'pt-6' : ''}`}>
                 <div className="flex-grow pr-8">
                   <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">{group.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">{group.description}</p>
                 </div>
                 <div className="mt-4 md:mt-0 flex-shrink-0">
                   {group.link ? (
                     <a href={group.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg hover:bg-primary-100 transition-colors">
                        访问群组 <ExternalLink className="w-4 h-4 ml-2" />
                     </a>
                   ) : (
                     <span className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed">
                        暂未开放
                     </span>
                   )}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Research;