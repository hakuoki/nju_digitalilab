export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'News' | 'Event' | 'Notice' | 'Intro';
  summary?: string;
  content?: string; // HTML content for the detail page
  link?: string;
  image?: string; // 新闻封面：支持图床提供的 HTTPS 图片直链，也兼容 public 下的本地路径
}

export interface Group {
  id: string;
  title: string;
  description: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  type: 'Journal' | 'Conference' | 'Book';
  link?: string; // Link to DOI or PDF
}

export interface Course {
  id: string;
  code: string;
  name: string;
  semester: string;
  instructor: string;
  description: string;
}

export interface Member {
  id: string;
  name: string;
  title: string;
  image: string;
  researchInterests: string[];
  personalPage?: string;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string;
  status: 'Ongoing' | 'Completed';
  content?: string; // HTML content for the detail page
}
