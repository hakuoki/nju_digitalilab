import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, User, FileText, CheckCircle } from 'lucide-react';

const COURSE_DETAIL = {
  title: "AI与中国近代史研究",
  code: "DH101",
  instructor: "金伯文",
  semester: "2025 秋季",
  description: "本课程旨在向学生介绍数字人文的基本概念、理论与方法。通过案例教学与实践操作，学生将了解从文本挖掘、空间分析到网络可视化的多种数字史学研究路径。",
  objectives: [
    "理解数字人文的发展脉络与核心议题",
    "掌握基础的数据获取、清洗与管理技能",
    "学会利用数字工具进行历史问题的探索性分析",
    "培养跨学科协作与批判性反思数字技术的能力"
  ],
  syllabus: [
    { week: 1, topic: "什么是数字人文？理论与历史" },
    { week: 2, topic: "数字化：从文本到数据" },
    { week: 3, topic: "文本分析基础：词频、关键词与正则表达式" },
    { week: 4, topic: "文本挖掘进阶：主题模型与情感分析" },
    { week: 5, topic: "空间分析：历史地理信息系统(HGIS)入门" },
    { week: 6, topic: "HGIS实践：QGIS基础操作" },
    { week: 7, topic: "关系型数据库建设：Access与MySQL" },
    { week: 8, topic: "社会网络分析(SNA)基础" },
    { week: 9, topic: "SNA实践：Gephi使用指南" },
    { week: 10, topic: "数据可视化原理与实践" },
    { week: 11, topic: "小组项目选题与开题" },
    { week: 12, topic: "期末项目展示与汇报" }
  ]
};

const CourseDetail: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/teaching" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回教学页面
      </Link>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-primary-900 text-white p-8">
           <div className="flex items-center space-x-3 text-primary-200 mb-2 font-mono text-sm">
              <span className="bg-primary-800 px-3 py-1 rounded-full">{COURSE_DETAIL.code}</span>
              <span>{COURSE_DETAIL.semester}</span>
           </div>
           <h1 className="text-3xl md:text-4xl font-bold mb-4">{COURSE_DETAIL.title}</h1>
           <div className="flex items-center text-primary-100">
              <User className="w-5 h-5 mr-2" />
              <span className="text-lg">主讲: {COURSE_DETAIL.instructor}</span>
           </div>
        </div>

        <div className="p-8">
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-primary-600" />
              课程简介
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {COURSE_DETAIL.description}
            </p>
          </div>

          <div className="mb-10">
             <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-primary-600" />
              教学目标
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {COURSE_DETAIL.objectives.map((obj, i) => (
                <li key={i} className="flex items-start bg-gray-50 p-3 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">{i + 1}</span>
                  <span className="text-gray-700">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-primary-600" />
              课程大纲
            </h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
               {COURSE_DETAIL.syllabus.map((item, i) => (
                 <div key={i} className={`flex p-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-0 hover:bg-primary-50 transition-colors`}>
                    <div className="w-16 flex-shrink-0 font-bold text-primary-600">Week {item.week}</div>
                    <div className="text-gray-700">{item.topic}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
