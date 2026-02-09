import React from 'react';
import { LAB_INFO } from '../data';
import { MapPin, Mail, QrCode } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">联系我们</h1>

      <div className="bg-white p-8 rounded-xl shadow-md space-y-8">
         <div>
           <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
             <MapPin className="w-5 h-5 text-primary-500 mr-2" />
             地址
           </h3>
           <p className="text-gray-600 pl-7">{LAB_INFO.address}</p>
         </div>

         <div>
           <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
             <Mail className="w-5 h-5 text-primary-500 mr-2" />
             邮箱
           </h3>
           <p className="text-gray-600 pl-7">digitalilab@163.com</p>
         </div>

         <div>
           <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
             <QrCode className="w-5 h-5 text-primary-500 mr-2" />
             公众号
           </h3>
           <div className="pl-7">
              <p className="text-gray-600 mb-4">NJU数智史学实验室</p>
              <div className="w-480 h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <img 
                      src="images/扫码_搜索联合传播样式-白色版.png" 
                      alt="NJU数智史学实验室公众号" 
                      className="w-full h-full object-cover"
                  />
              </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Contact;