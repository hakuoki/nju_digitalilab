import React from 'react';
import { LAB_INFO } from '../data';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary-600">
        <h1 className="text-3xl font-bold text-primary-900 mb-6 border-b border-gray-100 pb-4">实验室简介</h1>
        
        <div className="prose prose-primary max-w-none text-gray-700 leading-loose">
          <p className="text-lg font-medium text-primary-800 mb-6">
            {LAB_INFO.description}
          </p>
          <p className="mb-4">
            南京大学数智文献实验室成立于2024年，依托南京大学数字史学研究中心。致力于打造人工智能时代的史学文献处理与研究平台。
            实验室旨在应对大数据时代史学研究面临的机遇与挑战，从历史学研究的痛点出发，利用人工智能技术探索多语种史料的数字化、翻译、结构化处理与分析。
          </p>
          <p className="mb-4">
          南京大学数智文献实验室积极主导跨学科合作，与信息管理学院、软件学院团队合作开发“数智文献处理平台”，旨在为历史学者提供“0代码”、贴合历史研究需求、符合历史学者使用逻辑的AI文献处理与共享平台。
          </p>
          <p className="mb-4">
          “数智文献处理平台”集成了针对多语种、多模态文献的OCR、翻译、自动编目、AI交互分析等功能，支持历史学者进行高效的史料处理与分析。同时，平台支持历史学者进行史料文献共享，打造学术社区，创建专题研究矩阵，助力学者们挖掘史料中的新知，推动历史学研究方法的创新与发展。
          </p>
          <br></br>
          <p className="mb-4">
            我们的主要研究方向包括：
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 bg-primary-50/50 p-6 rounded-lg">
            <li><strong>AI时代历史研究的基础设施建设：</strong> 立足历史研究痛点，依托AI技术，建设高质量文献处理、研究平台。</li>
            <li><strong>AI时代的史料处理与分析：</strong> 利用大语言模型技术处理多语种、多模态文献，探索史料分析新范式。</li>
            <li><strong>AI时代的学术交流与跨学科合作：</strong> 依托“数智文献处理平台”，推动构建学术社区与专题研究矩阵，推动跨学科合作。</li>
            <li><strong>AI时代的历史教学：</strong> 将AI技术融入历史教学，培养具备人工智能素养与跨学科视野的复合型人才。</li>
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="images/LAB.png" alt="Lab environment" className="rounded-lg shadow-md w-full h-64 object-cover" />
          <img src="images/workshop.jpg" alt="Workshop" className="rounded-lg shadow-md w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;