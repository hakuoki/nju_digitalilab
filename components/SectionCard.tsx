import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SectionCardProps {
  title: string;
  linkTo?: string;
  children: ReactNode;
  className?: string;
  headerColor?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, linkTo, children, className = '', headerColor = 'text-primary-800' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-primary-50 flex flex-col h-full ${className}`}>
      <div className="px-5 py-3 border-b border-primary-100 flex justify-between items-center bg-primary-50/50">
        <h3 className={`text-lg font-bold ${headerColor} flex items-center`}>
          {title}
        </h3>
        {linkTo && (
          <Link to={linkTo} className="text-primary-500 hover:text-primary-700 hover:translate-x-1 transition-all">
            <ChevronRight className="h-5 w-5" />
          </Link>
        )}
      </div>
      <div className="p-5 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;