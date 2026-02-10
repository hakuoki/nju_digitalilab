import React from 'react';
import SectionCard from '../components/SectionCard';
import { NEWS_DATA, GROUPS_DATA, MEMBERS_DATA, PROJECTS_DATA } from '../data';
import { Calendar, FileText, User, Layers, ArrowRight, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const recentNews = NEWS_DATA.slice(0, 4);
  const featuredGroups = GROUPS_DATA.slice(0, 5);
  const featuredMembers = MEMBERS_DATA.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative bg-[#0f172a] rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden isolate group">
        
        {/* Animated Background Effects */}
        <style>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 10s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee-reverse {
             animation: marquee 45s linear infinite reverse;
          }
        `}</style>
        
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-slate-900 z-0"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.07]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* Scrolling Text Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-[0.08] flex flex-col justify-between py-4">
           {/* Row 1 */}
           <div className="whitespace-nowrap flex animate-marquee">
              <span className="text-sm font-mono mx-4">{Array(40).fill("AI • DH • ").join("")}</span>
              <span className="text-sm font-mono mx-4">{Array(40).fill("AI • DH • ").join("")}</span>
           </div>
           
           {/* Row 2 */}
           <div className="whitespace-nowrap flex animate-marquee-reverse opacity-60">
              <span className="text-xs font-mono mx-4">{Array(40).fill("DIGITAL HUMANITIES • ").join("")}</span>
              <span className="text-xs font-mono mx-4">{Array(40).fill("DIGITAL HUMANITIES • ").join("")}</span>
           </div>

           {/* Row 3 */}
           <div className="whitespace-nowrap flex animate-marquee opacity-40">
              <span className="text-lg font-bold mx-4">{Array(20).fill("AI + HISTORY • ").join("")}</span>
              <span className="text-lg font-bold mx-4">{Array(20).fill("AI + HISTORY • ").join("")}</span>
           </div>

            {/* Row 4 */}
           <div className="whitespace-nowrap flex animate-marquee-reverse opacity-70">
              <span className="text-sm font-mono mx-4">{Array(40).fill("DH • AI • ").join("")}</span>
              <span className="text-sm font-mono mx-4">{Array(40).fill("DH • AI • ").join("")}</span>
           </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            史册新生·万卷可及
          </h1>
          <p className="text-primary-100 text-lg md:text-xl leading-relaxed max-w-2xl">
               南京大学数智文献实验室成立于2024年，依托南京大学数字史学研究中心。致力于打造人工智能时代的史学文献处理与研究平台。

          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/about" className="bg-white text-primary-800 px-6 py-2 rounded-full font-semibold hover:bg-primary-50 transition-colors shadow-lg">
              了解更多
            </Link>
            <Link to="/contact" className="bg-primary-700 text-white border border-primary-500 px-6 py-2 rounded-full font-semibold hover:bg-primary-600 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column (News & Events) - Spans 8 columns on desktop */}
        <div className="md:col-span-8 space-y-6">
          <SectionCard title="新闻动态" linkTo="/news" className="h-full">
            <div className="space-y-4">
              {recentNews.map((news) => {
                const newsContent = (
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-100 last:border-0 pb-3 last:pb-0 hover:bg-primary-50/30 p-2 rounded transition-colors cursor-pointer">
                    <div className="flex-1 pr-4">
                      <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded mr-2 ${
                        news.category === 'Event' ? 'bg-orange-100 text-orange-700' : 
                        news.category === 'Notice' ? 'bg-red-100 text-red-700' : 'bg-primary-100 text-primary-700'
                      }`}>
                        {news.category === 'Event' ? '会议' : news.category === 'Notice' ? '通知' : '新闻'}
                      </span>
                      <span className="text-gray-700 font-medium group-hover:text-primary-700 transition-colors">{news.title}</span>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap font-mono">{news.date}</span>
                  </div>
                );

                return news.link ? (
                  <a href={news.link} key={news.id} target="_blank" rel="noopener noreferrer" className="block group">
                    {newsContent}
                  </a>
                ) : (
                  <Link to={`/news/${news.id}`} key={news.id} className="block group">
                    {newsContent}
                  </Link>
                );
              })}
            </div>
          </SectionCard>
        </div>

        {/* Right Column (People) - Spans 4 columns */}
        <div className="md:col-span-4">
          <SectionCard title="研究团队" linkTo="/people">
            <div className="grid grid-cols-2 gap-4">
              {featuredMembers.map((member) => (
                <Link to="/people" key={member.id} className="text-center group block">
                  <div className="relative inline-block">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-2 border-2 border-primary-100 group-hover:border-primary-400 transition-colors shadow-sm"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-primary-700">{member.name}</h4>
                  <p className="text-xs text-gray-500">{member.title}</p>
                </Link>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Second Row - Refactored: Platform Achievements */}
        <div className="md:col-span-12">
          <SectionCard title="平台成果" linkTo="/research">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 1. Platform Navigation Card - 数智文献处理平台 */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl p-6 text-white relative overflow-hidden group flex flex-col h-full shadow-lg">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/30 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
                
                <div className="relative z-10 flex-grow">
                   <div className="flex items-center gap-2 mb-4">
                     <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                       <Layers className="w-6 h-6 text-white" />
                     </div>
                     <span className="text-xs font-bold px-2 py-0.5 bg-primary-500/50 text-white rounded border border-primary-400/30">核心平台</span>
                   </div>
                   
                   <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">数智文献处理平台</h3>
                   <p className="text-primary-100 text-sm leading-relaxed mb-6">
                     提供AI赋能的OCR、翻译、编目及数据库建设功能，不仅是文献处理工具，更是新一代数字人文研究的基础设施。
                   </p>
                </div>
                
                <div className="relative z-10 mt-auto">
                   <a href="https://www.digitalilab.cn/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-primary-800 py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors shadow-md group-hover:shadow-lg mb-4">
                     进入平台
                   </a>
                   <div className="flex justify-between text-xs font-medium text-primary-200 px-1">
                      <a href="https://my.feishu.cn/wiki/WV1rwzRICiMXeAkeTUEcuHSun5g" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                        <FileText className="w-3 h-3" /> 用户手册
                      </a>
                      <a href="https://mp.weixin.qq.com/s/FHZZHNdAK0QPMy1bgPYqRg" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                        <ArrowRight className="w-3 h-3" /> 功能介绍
                      </a>
                   </div>
                </div>
              </div>

              {/* 2. Academic Community Card - 学术社区 */}
              <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col h-full hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-50">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                       <Award className="w-5 h-5" />
                    </div>
                    <div>
                       <h3 className="font-bold text-gray-800">学术社区</h3>
                       <p className="text-[10px] text-gray-500">多学科力量 · 前沿探索</p>
                    </div>
                 </div>
                 
                 <div className="space-y-3 flex-grow overflow-y-auto max-h-[220px] custom-scrollbar">
                    {PROJECTS_DATA.slice(0, 3).map((proj) => (
                       <Link to={`/projects/${proj.id}`} key={proj.id} className="block group/item p-2 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className="flex flex-col gap-1">
                             <div className="flex justify-between items-start">
                                <h4 className="text-sm font-semibold text-gray-700 group-hover/item:text-primary-700 line-clamp-1">{proj.title}</h4>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ml-2 whitespace-nowrap ${proj.status === 'Ongoing' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                  {proj.status === 'Ongoing' ? '进行中' : '已结项'}
                                </span>
                             </div>
                             <p className="text-xs text-gray-400 line-clamp-1">{proj.description}</p>
                          </div>
                       </Link>
                    ))}
                 </div>
                 
                 <Link to="/research" className="mt-4 pt-3 border-t border-gray-50 text-xs font-semibold text-primary-600 flex items-center justify-center gap-1 hover:text-primary-700 transition-colors">
                    浏览所有项目 <ArrowRight className="w-3 h-3" />
                 </Link>
              </div>

              {/* 3. Public Groups Card - 公开群组 */}
              <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col h-full hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-50">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                       <Users className="w-5 h-5" />
                    </div>
                    <div>
                       <h3 className="font-bold text-gray-800">公开群组</h3>
                       <p className="text-[10px] text-gray-500">资源共享 · 合作共建</p>
                    </div>
                 </div>
                 
                 <div className="space-y-2 flex-grow overflow-y-auto max-h-[220px] custom-scrollbar">
                    {featuredGroups.map((group) => (
                       <a href={group.link} key={group.id} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 hover:bg-blue-50/50 rounded-lg transition-colors group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover/item:bg-blue-500 flex-shrink-0"></div>
                          <h4 className="text-sm font-medium text-gray-600 group-hover/item:text-blue-700 line-clamp-1 flex-grow">
                             {group.title}
                          </h4>
                          <ArrowRight className="w-3 h-3 text-gray-300 group-hover/item:text-blue-400 opacity-0 group-hover/item:opacity-100 transition-all" />
                       </a>
                    ))}
                 </div>

                 <Link to="/research" className="mt-4 pt-3 border-t border-gray-50 text-xs font-semibold text-primary-600 flex items-center justify-center gap-1 hover:text-primary-700 transition-colors">
                    查看全部群组 <ArrowRight className="w-3 h-3" />
                 </Link>
              </div>

            </div>
          </SectionCard>
        </div>

      </div>
    </div>
  );
};

export default Home;