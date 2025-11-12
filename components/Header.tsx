
import React from 'react';
import CloudIcon from './icons/CloudIcon';

interface HeaderProps {
  aiMotivation: string;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ aiMotivation, isLoading }) => {
  return (
    <header className="text-center p-4 md:p-8">
      <div className="flex items-center justify-center gap-4 mb-4">
        <CloudIcon className="w-12 h-12 text-sky-400" />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
          Lộ Trình Cloud Engineer 2026
        </h1>
      </div>
      <p className="text-lg text-slate-400 max-w-3xl mx-auto">
        Con đường chi tiết để chinh phục mục tiêu trở thành Kỹ sư Đám mây. Đánh dấu các mục đã hoàn thành để theo dõi tiến độ của bạn.
      </p>
      <div className="mt-6 text-left max-w-3xl mx-auto bg-slate-800/50 p-4 rounded-lg border border-slate-700 min-h-[100px] flex items-center justify-center">
        {isLoading ? (
          <div className="flex items-center gap-2 text-slate-400">
            <svg className="animate-spin h-5 w-5 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>AI đang tạo động lực cho bạn...</span>
          </div>
        ) : (
          <p className="text-slate-300 italic">
            {aiMotivation}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
