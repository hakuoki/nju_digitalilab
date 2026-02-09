import React from 'react';
import SectionCard from '../components/SectionCard';
import { NEWS_DATA, PUBLICATIONS_DATA, MEMBERS_DATA, PROJECTS_DATA } from '../data';
import { Calendar, FileText, User, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const recentNews = NEWS_DATA.slice(0, 4);
  const recentPubs = PUBLICATIONS_DATA.slice(0, 3);
  const featuredMembers = MEMBERS_DATA.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-primary-400/20 blur-2xl"></div>
        
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
              加入我们
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
              {recentNews.map((news) => (
                <Link to={`/news/${news.id}`} key={news.id} className="block group">
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
                </Link>
              ))}
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

        {/* Second Row */}
        
        {/* Projects */}
        <div className="md:col-span-6">
           <SectionCard title="重点项目" linkTo="/research">
              <div className="space-y-4">
                {PROJECTS_DATA.map((proj) => (
                   <Link to={`/projects/${proj.id}`} key={proj.id} className="block">
                     <div className="bg-primary-50/50 p-4 rounded-lg border border-primary-100 hover:bg-primary-50 hover:border-primary-200 transition-colors">
                        <div className="flex items-center mb-2">
                          <Layers className="w-4 h-4 text-primary-500 mr-2" />
                          <h4 className="font-bold text-primary-900">{proj.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{proj.description}</p>
                     </div>
                   </Link>
                ))}
              </div>
           </SectionCard>
        </div>

        {/* Publications */}
        <div className="md:col-span-6">
          <SectionCard title="最新成果" linkTo="/research">
            <div className="space-y-4">
              {recentPubs.map((pub) => (
                <div key={pub.id} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 leading-snug hover:text-primary-600 cursor-pointer">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {pub.authors.join(', ')} | <span className="italic">{pub.journal}</span>, {pub.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

      </div>
    </div>
  );
};

export default Home;