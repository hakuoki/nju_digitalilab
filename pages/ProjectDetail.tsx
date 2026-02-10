import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data';
import { ChevronLeft, Clock, Activity, Layers } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_DATA.find((item) => item.id === id);

  if (!project) {
    return <Navigate to="/research" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/research" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6 transition-colors font-medium">
        <ChevronLeft className="w-5 h-5 mr-1" />
        返回平台成果
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-primary-600">
        <div className="p-8 md:p-10 border-b border-gray-100 bg-gray-50/50">
           <div className="flex items-start justify-between">
             <div className="flex-1">
               <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary-600">
                  <Layers className="w-5 h-5" />
                  <span>学术社区</span>
               </div>
               <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
               <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary-400" />
                    相关群组: {project.duration}
                  </span>
                  <span className={`flex items-center px-2 py-0.5 rounded ${
                    project.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Activity className="w-4 h-4 mr-2" />
                    {project.status === 'Ongoing' ? '进行中' : '已结项'}
                  </span>
               </div>
             </div>
           </div>
        </div>

        <div className="p-8 md:p-12">
           <div className="mb-8 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <h3 className="text-sm font-bold text-primary-800 uppercase tracking-wide mb-2">项目简介</h3>
              <p className="text-gray-700">{project.description}</p>
           </div>
           
           <div className="prose prose-purple max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: project.content || '<p>学术社区建设中，敬请期待。</p>' }}
           />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;