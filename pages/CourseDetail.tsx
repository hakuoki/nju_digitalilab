import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, User, FileText, CheckCircle } from 'lucide-react';

const COURSE_DETAIL = {
  title: "AI与中国近代史研究",
  code: "历史学院专业选修课",
  instructor: "金伯文",
  semester: "2025 秋季",
  description: "本课程依托南京大学数智文献处理平台，旨在引导学生在近现代史研究实践中运用AI大模型技术辅助历史研究，培养学生人工智能素养与卓越的专业素养。本课程与阿里云等企业合作，为选课学生提供算力支持，鼓励学生通过零代码、低代码工具自主进行AI时代的历史研究探索，并通过丰富自由的实验设计展示研究成果。",
  objectives: [
    "帮助学生系统掌握中国近代史的重要事件、发展脉络与核心理论，深入理解人工智能的基本概念、关键技术及其在历史研究中的应用场景;",
    "帮助学生了解人工智能技术(如自然语言处理、机器学习、知识图谱构建等)在历史文献分析、史料挖掘、历史场景模拟等方面的方法与流程;",
    "帮助学生具备运用人工智能工具对进行文献处理的的实践能力，锻炼学生完成基于人工智能技术的中国近代史小型研究的能力",
    "提升学生跨学科研究能力，锻炼学生在人工智能与历史学的交叉领域提出创新性研究问题、设计研究方案等能力。"
  ],
  syllabus: [
    { week: 1, topic: "什么是数字人文？理论与历史" },
    { week: 2, topic: "数字化：从文本到数据" },
    { week: 3, topic: "数智文献处理平台介绍与实践" },
    { week: 4, topic: "跨学科讲座：情报学视域下的史料处理与实证研究" },
    { week: 5, topic: "线上书院讨论班：大语言模型在历史研究中的应用——基于南京大学数智文献处理平台的开发实践" },
    { week: 6, topic: "小组汇报：大语言模型在多语种史料结构化处理中的实践" },
    { week: 7, topic: "小组汇报：大语言模型OCR、翻译、史料问答能力测试" },
    { week: 8, topic: "小组实验展示：责任、污名与历史书写：卢沟桥事变后张自忠评价变迁（1937-1940）" },
    { week: 9, topic: "小组实验展示：AI助力下战争行军图绘制的初步探索" },
    { week: 10, topic: "跨学科讲座：软件工程+历史学 AI时代的跨学科研究" },
    { week: 11, topic: "小组实验展示：政治压力的身体化——基于《黄郛日记》的量化研究" },
    { week: 12, topic: "课程总结与展望" }
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
