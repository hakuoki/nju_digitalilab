import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-primary-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-bold text-white text-lg">南京大学数智文献实验室</p>
          <p className="text-sm mt-1">Digital and Intelligent Literature Lab at NJU</p>          
          <p className="text-xs mt-2 text-primary-400">© 2026 All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="https://www.nju.edu.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">南京大学首页</a>
          <a href="https://history.nju.edu.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">南京大学历史学院</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;