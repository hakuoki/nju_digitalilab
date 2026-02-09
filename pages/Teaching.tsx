import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES_DATA } from '../data';
import { GraduationCap, ArrowRight, FileText } from 'lucide-react';

const STUDENT_CASES = [
  { id: 1, title: "AI助力下战争行军图绘制的初步探索", link: "student-project-detail" },
];

const Teaching: React.FC = () => {
  return (
    <div>
       <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">教学与人才培养</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          南京大学数智文献实验室将数字技术与AI技术融入历史教学，开设了一系列数字人文特色课程、讲座、沙龙，致力于培养具备文理交叉视野的复合型历史研究人才。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {COURSES_DATA.slice(0, 1).map((course) => (
          <div key={course.id} className="flex flex-col bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                 <div className="bg-primary-100 text-primary-700 p-2 rounded-lg">
                    <GraduationCap className="w-6 h-6" />
                 </div>
                 <span className="text-sm font-mono text-gray-400">{course.code}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
              <p className="text-sm text-gray-500 mb-4 flex items-center">
                 <span className="bg-gray-100 px-2 py-0.5 rounded mr-2">{course.semester}</span>
                 <span>主讲: {course.instructor}</span>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 rounded-b-lg">
              <Link to="course-detail" className="flex items-center text-primary-600 text-sm font-semibold hover:text-primary-800 transition-colors">
                查看课程大纲 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
         {/* Decorative blobs for modern look */}
         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl pointer-events-none"></div>

         <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-center">学生课程实践案例展示</h2>
            <div>
              {STUDENT_CASES.slice(0, 1).map((item) => (
                <Link key={item.id} to="student-project-detail" className="block group">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/20 hover:scale-[1.01] transition-all duration-300 flex items-center justify-between shadow-lg">
                    <div className="flex items-center">
                      <div className="p-3 bg-white/10 rounded-full mr-5 border border-white/20">
                          <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-white mb-2">{item.title}</span>
                        <div className="flex items-center space-x-2 text-sm text-primary-100">
                          <span className="bg-primary-500/40 px-2 py-0.5 rounded text-xs border border-primary-400/30">优秀案例</span>
                          <span>点击查看详细报告</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                       <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Teaching;