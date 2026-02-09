import React from 'react';
import { COURSES_DATA } from '../data';
import { GraduationCap } from 'lucide-react';

const Teaching: React.FC = () => {
  return (
    <div>
       <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">教学与人才培养</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          实验室依托南京大学历史学院，开设了一系列数字人文特色课程，致力于培养具备文理交叉视野的复合型历史研究人才。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES_DATA.map((course) => (
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
              <button className="text-primary-600 text-sm font-semibold hover:text-primary-800 transition-colors">
                查看课程大纲 &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white text-center">
         <h2 className="text-2xl font-bold mb-4">学生科研训练计划</h2>
         <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
           实验室每年面向全校本科生开放"数字人文创新训练项目"申请，提供数据支持与技术指导。
         </p>
         <button className="bg-white text-primary-900 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors shadow-lg">
           申请加入
         </button>
      </div>
    </div>
  );
};

export default Teaching;