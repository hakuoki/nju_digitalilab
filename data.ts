import { NewsItem, Publication, Course, Member, Project } from './types';

// 实验室基本信息
export const LAB_INFO = {
  name: "南京大学数智史学实验室",
  englishName: "NJU Digital History Lab",
  description: "南京大学数智史学实验室致力于将现代数字技术与传统史学研究相结合，探索历史大数据分析、地理信息系统(GIS)在历史研究中的应用、以及数字人文视域下的新史学方法。",
  address: "中国江苏省南京市栖霞区仙林大道163号南京大学历史学院",
  email: "contact@history.nju.edu.cn",
  phone: "+86-25-8968xxxx"
};

// 新闻动态
export const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: '实验室举办"数字人文与历史研究"年度论坛',
    date: '2024-05-15',
    category: 'Event',
    summary: '来自国内外的30余位学者齐聚一堂，共同探讨AI时代的史料处理与历史解释。',
    content: `
      <p>2024年5月15日，南京大学数智史学实验室在历史学院报告厅成功举办了"数字人文与历史研究"年度论坛。本次会议旨在回应人工智能技术迅猛发展背景下，历史学研究面临的机遇与挑战。</p>
      <p>来自哈佛大学、北京大学、复旦大学等高校的30余位专家学者与会。会议围绕以下三个议题展开了热烈讨论：</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>生成式AI在史料整理与文本挖掘中的应用边界</li>
        <li>历史地理信息系统(HGIS)的数据标准化与共享机制</li>
        <li>数字史学方法论的教学与人才培养</li>
      </ul>
      <p>实验室主任陈静教授在致辞中指出：“数字技术不应仅仅是史学研究的辅助工具，更应当成为激发新问题、新视角的催化剂。”</p>
      <div class="my-6">
        <img src="https://picsum.photos/800/400?random=10" alt="会议现场" class="rounded-lg shadow-md w-full" />
        <p class="text-sm text-gray-500 text-center mt-2">会议现场合影</p>
      </div>
      <p>本次论坛不仅促进了学术交流，也为实验室未来的跨机构合作奠定了坚实基础。</p>
    `
  },
  {
    id: '2',
    title: '祝贺实验室成员获得国家社科基金重大项目立项',
    date: '2024-04-20',
    category: 'News',
    summary: '项目题为《明清长江流域商业文书的数据库建设与量化研究》。',
    content: `
      <p>近日，全国哲学社会科学工作办公室公布了2024年度国家社科基金重大项目立项名单，我实验室王涛副教授担任首席专家的课题《明清长江流域商业文书的数据库建设与量化研究》获得立项。</p>
      <p>该项目计划在未来五年内，收集整理散落在民间及海外的明清商业契约、账本等文书，建立一个多维度的关系型数据库。在此基础上，团队将利用社会网络分析（SNA）和计量史学方法，通过长时段的数据分析，重构明清时期长江流域的市场网络与商业信用体系。</p>
    `
  },
  {
    id: '3',
    title: '2024年秋季学期"数字史学导论"课程开放选课',
    date: '2024-06-01',
    category: 'Notice',
    summary: '面向全校本科生开放，欢迎对历史与编程感兴趣的同学报名。',
    content: `
      <p><strong>课程名称：</strong>数字史学导论 (HIS101)</p>
      <p><strong>授课教师：</strong>陈教授</p>
      <p><strong>时间地点：</strong>周三 14:00-16:00，仙II-203</p>
      <p>本课程专为对文理交叉研究感兴趣的本科生设计，无需预先具备编程基础。课程将从零开始教授Python基础，并结合具体的历史研究案例（如《全宋文》的文本分析、通过API抓取历史气象数据等），带领学生推开数字人文的大门。</p>
      <p>选课系统开放时间请关注教务处通知。</p>
    `
  },
  {
    id: '4',
    title: '实验室与哈佛大学CGA中心达成合作意向',
    date: '2023-12-10',
    category: 'News',
    content: '<p>2023年12月，实验室代表团访问哈佛大学地理分析中心（CGA），双方就“世界地图（WorldMap）”平台的中文数据共建达成初步合作意向。</p>'
  }
];

// 研究成果（论著）
export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: '1',
    title: '基于深度学习的中国古籍自动句读与实体识别研究',
    authors: ['张三', '李四', '王五'],
    journal: '中国图书馆学报',
    year: '2023',
    type: 'Journal'
  },
  {
    id: '2',
    title: 'Digital Humanities in China: Progress and Challenges',
    authors: ['San Zhang', 'Si Li'],
    journal: 'Digital Scholarship in the Humanities',
    year: '2024',
    type: 'Journal'
  },
  {
    id: '3',
    title: '数智时代的史学变革',
    authors: ['赵六'],
    journal: '社会科学文献出版社',
    year: '2023',
    type: 'Book'
  }
];

// 教学课程
export const COURSES_DATA: Course[] = [
  {
    id: '1',
    code: 'HIS101',
    name: '数字人文导论',
    semester: '2024 秋季',
    instructor: '陈教授',
    description: '介绍数字人文的基本概念、工具与方法，涵盖文本分析、网络分析等基础技能。'
  },
  {
    id: '2',
    code: 'HIS203',
    name: '历史地理信息系统(HGIS)',
    semester: '2025 春季',
    instructor: '林副教授',
    description: '利用ArcGIS与QGIS软件，复原历史地理场景，进行空间分析。'
  },
  {
    id: '3',
    code: 'HIS305',
    name: '历史大数据分析与可视化',
    semester: '2024 秋季',
    instructor: '王讲师',
    description: '基于Python的历史数据清洗、统计分析与D3.js可视化呈现。'
  }
];

// 人员
export const MEMBERS_DATA: Member[] = [
  {
    id: '1',
    name: '陈静',
    title: '教授 / 实验室主任',
    image: 'https://picsum.photos/200/200?random=1',
    researchInterests: ['数字人文', '中国近现代史']
  },
  {
    id: '2',
    name: '王涛',
    title: '副教授',
    image: 'https://picsum.photos/200/200?random=2',
    researchInterests: ['历史地理', 'GIS']
  },
  {
    id: '3',
    name: '李江',
    title: '研究员',
    image: 'https://picsum.photos/200/200?random=3',
    researchInterests: ['自然语言处理', '古籍数字化']
  },
  {
    id: '4',
    name: '周嘉昕',
    title: '副教授',
    image: 'https://picsum.photos/200/200?random=4',
    researchInterests: ['社会网络分析', '经济史']
  }
];

// 项目
export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: '六朝建康历史地理信息系统建设',
    duration: '2021-2024',
    description: '基于多源史料，重建六朝时期建康城的城市形态与空间结构。',
    status: 'Ongoing',
    content: `
      <p>本项目的核心目标是利用历史地理信息系统（HGIS）技术，对六朝（222年-589年）时期的建康城（今南京）进行数字化复原。项目组综合利用正史、地方志、考古发掘报告以及近代测绘地图等多源异构数据，试图解决传统考据学在空间定位上的模糊性问题。</p>
      <h3 class="text-lg font-bold mt-4 mb-2">主要研究内容：</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>六朝建康城外郭、宫城边界的精准定位</li>
        <li>城市水系网络的复原与演变分析</li>
        <li>基于DEM数据的地形地貌重建</li>
        <li>寺庙、宅邸等重要地标的空间分布规律研究</li>
      </ul>
      <h3 class="text-lg font-bold mt-4 mb-2">预期成果：</h3>
      <p>建立一个开放访问的“六朝建康WebGIS平台”，用户可以在地图上自由叠加不同时期的图层，查询历史地名的沿革信息，并查看三维复原模型。</p>
    `
  },
  {
    id: '2',
    title: '中国商业广告数据库 (1850-1949)',
    duration: '2019-2022',
    description: '收录近代报刊中的商业广告图像与文本，支持全文检索与图像识别。',
    status: 'Completed',
    content: `
      <p>近代报刊广告是研究中国近代社会转型、消费文化以及商业伦理的重要史料。本项目通过OCR文字识别与图像分类技术，对《申报》、《大公报》等重要近代报刊中的广告进行了系统整理。</p>
      <p>数据库目前已收录广告条目超过50万条，涵盖医药、图书、化妆品、烟草等二十余个行业。平台支持按品牌、商品类别、时间段进行高级检索，并提供广告图像的在线浏览与下载服务。</p>
    `
  }
];
