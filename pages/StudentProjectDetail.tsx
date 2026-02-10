import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Tag, FileText, ExternalLink } from 'lucide-react';

const PROJECT_DETAIL = {
  title: 'AI助力下战争行军图绘制的初步探索',
  author: '数智文献实验室本科生',
  date: '2026-01-04',
  category: '数据可视化',
  summary: '2025年秋季学期，在南京大学历史学院金伯文老师所讲授的《人工智能与中国近代史研究》课程上，2024级本科生付紫乔汇报了利用“南京大学数智文献处理平台”整理日军行军数据并使用生成式AI工具绘制行军路线的初步想法与操作。在此基础上，南京大学数智史学实验室的同学们希望将其进一步扩展到抗战中的大规模战役行军路线，以下是针对武汉会战做出的实验案例。',
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        2025年秋季学期，在南京大学历史学院金伯文老师所讲授的《人工智能与中国近代史研究》课程上，2024级本科生付紫乔汇报了利用“南京大学数智文献处理平台”整理日军行军数据并使用生成式AI工具绘制行军路线的初步想法与操作。在此基础上，南京大学数智史学实验室的同学们希望将其进一步扩展到抗战中的大规模战役行军路线，以下是针对武汉会战做出的实验案例。
      </p>

      <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
        <h3 class="text-xl font-bold text-gray-900 mb-3">研究背景</h3>
        <p class="text-gray-600">
          对武汉会战中日军行军路线的研究，是还原这场战略会战全貌、深化抗战史认知的关键一环。武汉会战作为抗日战争中规模最大、持续时间最长的战役之一，日军从华北、华东、华南多方向分兵进犯的行军路线，不仅直接决定了战役的攻防布局与推进节奏，更折射出其 “速战速决” 灭亡中国的战略企图，以及为打通南北战线、控制长江航道所做的军事部署。通过梳理日军各师团的进军路径，能够直观呈现战场战略态势，为研究抗战时期的军事地理、战略防御体系提供重要实证；同时，这一研究也能从侧面反映出会战对沿线地区的社会影响，以及中国军民协同抗敌的历史脉络，具有重要的军事史与社会史双重价值。
        </p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">研究过程</h3>
      <p class="text-gray-700 leading-relaxed">
        在南京大学数智文献处理平台的“AI文献助理”功能辅助下，运用 Google AI studio工具，实验室两位本科生仅耗时一天就完成了工作流构建及结果生成，并绘制了一幅武汉会战中日军行军路线图，以下是实验流程及成果展示。
      </p>

      <h4 class="text-2xl font-bold text-gray-900 mt-8 mb-4">（一）实验技术支持</h4>
      <p class="text-gray-700 leading-relaxed">
       南京大学数智文献处理平台"AI文献助理"、“文献Chat”功能支持利用语言大模型同时处理多份文献，对入库文献进行细致的提取信息与思考解析工作，并可通过不同模型互相校对以确保文献处理的完整性。“AI文献助理”和“文献Chat”按使用者的需求可生成文字、表格等多种形式的结果，便于数据的再次加工。本次实验对单本文献使用“文献Chat”工具。 
      </p>
      <p class="text-gray-700 leading-relaxed">
      Google AI Studio功能支持快速上传数据并创作可视化程序，对动态演示需求能够较好回应。
        </p>

      <h4 class="text-2xl font-bold text-gray-900 mt-8 mb-4">（二）实验流程</h4>
      <p class="text-gray-700 leading-relaxed">
        1、数据入库与OCR识别
    <p class="text-gray-700 leading-relaxed">
    
    2、令文献Chat提取文本数据并生成表格    
        <p class="text-gray-700 leading-relaxed">
    3、将文献Chat中的表格粘贴到EXCEL中，并对数据进行清洗，删除错误、冗余信息，保存为.csv格式文件。
        <p class="text-gray-700 leading-relaxed">
4、使用Google AI Studio制图

提交如下提示词：请依据上传的.csv表格中的数据做一个武汉会战日军行军图html网页。要求：（1）采用中华民国时期（1912-1949）的底图；（2）可交互设计，点击路线节点可知text一栏中的作战信息，以不同颜色区分部队序列，并且设计出一种归类体系使得各支部队的隶属关系能够体现出来。（3）定位做到精准，路线信息清晰。得到网页代码后使用记事本保存为.html文件即可打开
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">总结反思</h3>
      <ul class="list-disc pl-6 space-y-3 text-gray-700">
        <li>南京大学数智文献处理平台文献Chat功能能够自动转化经纬度消息，按照用户需要的可利用格式进行整理，明显提高了搜集史料中地理信息的效率。</li>
        <li>本次试验中使用的Google AI Studio制作动态行军图的能力已经非常强大，可以0代码完全依赖其生成可互动的网页。但是必须承认，其精度相比于专业的GIS软件来说仍有较大差距，因此如果要精细制图，学习GIS工具仍然必要。</li>
        <li>本次试验最终只展示了日方的行军路线，原因有二，一是两方战史书写的地理尺度仍有差异，日方史料中各作战责任部队更为具体；二是为演示美观性考虑，仅绘制日军侵略路线更能突出文献Chat功能对于信息的提取与掌握能力，相信随着Google AI Studio及其他动态图示生成大模型的技术进步，这一作业能完整展现中日双方在全面战场各会战的军事部署与行军路线。</li>
      </ul>
<p class="text-gray-700 leading-relaxed">
点击右下角“查看公众号推文”获取行军图成果
    </div>
  `
};

const StudentProjectDetail: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/teaching" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8 transition-colors group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        返回教学页面
      </Link>

      <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 p-8 md:p-12 text-white">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Tag className="w-3 h-3 mr-2" />
              {PROJECT_DETAIL.category}
            </span>
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Calendar className="w-3 h-3 mr-2" />
              {PROJECT_DETAIL.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {PROJECT_DETAIL.title}
          </h1>

          <div className="flex items-center text-primary-200">
            <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center mr-3 border border-primary-600">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-primary-300">项目作者</p>
              <p className="font-semibold text-white">{PROJECT_DETAIL.author}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-600"
               dangerouslySetInnerHTML={{ __html: PROJECT_DETAIL.content }} 
          />
          
          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
             <div className="text-gray-500 text-sm">
               指导教师：金伯文
             </div>
             <a 
               href="https://mp.weixin.qq.com/s/55AlYeqhBRO8BgXxW3MxDQ" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors"
             >
               <FileText className="w-4 h-4 mr-2" />
               查看公众号推文
             </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StudentProjectDetail;
