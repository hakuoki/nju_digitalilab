import React from 'react';
import { LAB_INFO } from '../data';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">联系我们</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
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
             <p className="text-gray-600 pl-7">{LAB_INFO.email}</p>
           </div>

           <div>
             <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
               <Phone className="w-5 h-5 text-primary-500 mr-2" />
               电话
             </h3>
             <p className="text-gray-600 pl-7">{LAB_INFO.phone}</p>
           </div>

           <div>
             <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
               <Clock className="w-5 h-5 text-primary-500 mr-2" />
               开放时间
             </h3>
             <p className="text-gray-600 pl-7">周一至周五: 8:30 - 17:30</p>
             <p className="text-gray-400 pl-7 text-sm">(寒暑假及法定节假日除外)</p>
           </div>
        </div>

        {/* Right: Map Placeholder */}
        <div className="bg-gray-200 rounded-xl shadow-inner min-h-[400px] flex items-center justify-center relative overflow-hidden group">
           {/* Simulate a Map */}
           <img 
             src="https://picsum.photos/800/800?grayscale" 
             alt="Map Location" 
             className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
           />
           <div className="relative z-10 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg text-center">
             <p className="font-bold text-gray-800">南京大学仙林校区</p>
             <p className="text-xs text-gray-500">历史学院大楼</p>
             <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-primary-600 hover:underline">
               查看详细地图
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;