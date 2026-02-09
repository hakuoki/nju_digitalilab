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
            南京大学数智史学实验室成立于2018年，是依托南京大学历史学院建设的跨学科研究平台。
            实验室旨在应对大数据时代史学研究面临的机遇与挑战，推动历史学与计算机科学、地理信息科学、统计学等学科的深度融合。
          </p>
          <p className="mb-4">
            我们的主要研究方向包括：
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 bg-primary-50/50 p-6 rounded-lg">
            <li><strong>历史大数据建设：</strong> 构建大规模、高质量的历史数据库，包括传记资料、地理信息、商业文书等。</li>
            <li><strong>文本挖掘与知识图谱：</strong> 利用NLP技术处理古籍文本，构建历史知识图谱。</li>
            <li><strong>历史地理信息系统 (HGIS)：</strong> 复原历史地理景观，进行空间量化分析。</li>
            <li><strong>社会网络分析：</strong> 研究历史人物关系网络与社会结构演变。</li>
          </ul>
          <p>
            实验室目前拥有专职研究人员10余名，博士后及研究生30余名。
            我们配备了高性能计算服务器、大幅面扫描仪等专业设备，并自主研发了多个数字人文研究平台。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="https://picsum.photos/600/400?grayscale" alt="Lab environment" className="rounded-lg shadow-md w-full h-64 object-cover" />
          <img src="https://picsum.photos/600/400?blur=2" alt="Workshop" className="rounded-lg shadow-md w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;