import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Tag, FileText, ExternalLink } from 'lucide-react';

const PROJECT_DETAIL = {
  title: '《申报》广告中的近代上海消费文化变迁',
  author: '2021级本科生向明',
  date: '2024-01-10',
  category: '数据可视化',
  summary: '本研究利用OCR技术提取了1920-1930年间《申报》中的商业广告数据，通过词频分析与图像分类，探讨了近代上海消费主义的兴起过程。',
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        近代上海作为中国最早对外开放的通商口岸之一，其商业文化的繁荣程度在《申报》的广告版面中得到了充分体现。本研究旨在通过量化手段，揭示这一时期消费文化的演变特征。
      </p>

      <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
        <h3 class="text-xl font-bold text-gray-900 mb-3">研究背景</h3>
        <p class="text-gray-600">
          20世纪20年代至30年代被公认为上海的“黄金时代”。随着民族工商业的发展和西方生活方式的传入，报刊广告成为了连接商品与消费者的重要媒介。然而，传统研究多侧重于个案分析，缺乏对宏观趋势的把握。
        </p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">数据来源与处理</h3>
      <p class="text-gray-700 leading-relaxed">
        项目组选取了1920年至1930年间《申报》每月的特定日期版面，共计采集广告样本15,000余条。利用Python的Tesseract-OCR库进行文本识别，准确率达到85%以上。随后，对提取的文本进行了结构化处理，提取了商品名称、品牌、广告语、店铺地址等关键字段。
      </p>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white p-4 shadow-md rounded-lg break-inside-avoid">
             <div class="bg-gray-200 h-48 w-full rounded flex items-center justify-center mb-2">
                <span class="text-gray-500">图表：广告品类占比变化趋势</span>
             </div>
             <p class="text-sm text-gray-500 text-center">图1：1920-1930年各类商品广告占比变化</p>
        </div>
        <div class="bg-white p-4 shadow-md rounded-lg break-inside-avoid">
             <div class="bg-gray-200 h-48 w-full rounded flex items-center justify-center mb-2">
                <span class="text-gray-500">图表：广告关键词词云</span>
             </div>
             <p class="text-sm text-gray-500 text-center">图2：化妆品类广告高频词云</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">主要发现</h3>
      <ul class="list-disc pl-6 space-y-3 text-gray-700">
        <li><strong>女性消费市场的崛起：</strong> 1925年后，化妆品与服饰类广告占比显著上升，且广告语多强调“摩登”、“时尚”等概念。</li>
        <li><strong>国货运动的影响：</strong> 在几次重要的反帝爱国运动期间，标榜“国货”、“完全国货”的广告数量呈爆发式增长。</li>
        <li><strong>健康观念的转变：</strong> 医药类广告逐渐从传统的补益类向西医卫生类转变，强调科学与卫生。</li>
      </ul>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">结语</h3>
      <p class="text-gray-700 leading-relaxed margin-bottom-8">
        通过对《申报》广告的大数据分析，我们不仅看到了商品流动的轨迹，更看到了近代国人生活方式与价值观念的深刻变迁。数字人文方法为新闻史与社会文化史的研究提供了新的实证工具。
      </p>
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
               指导教师：陈静 教授
             </div>
             <button className="flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors">
               <FileText className="w-4 h-4 mr-2" />
               下载完整报告 (PDF)
             </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StudentProjectDetail;
