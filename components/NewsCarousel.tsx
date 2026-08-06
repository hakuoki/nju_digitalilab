import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';

interface NewsCarouselProps {
  news: NewsItem[];
}

const AUTO_PLAY_INTERVAL = 15_000;

const categoryLabels: Record<NewsItem['category'], string> = {
  Event: '会议',
  Notice: '通知',
  News: '新闻',
  Intro: '介绍',
};

const getDateValue = (date: string) => {
  const [year, month = 1, day = 1] = date.split('-').map(Number);
  return Date.UTC(year, month - 1, day);
};

const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  const sortedNews = useMemo(
    () => [...news].sort((a, b) => getDateValue(b.date) - getDateValue(a.date)),
    [news]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (sortedNews.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % sortedNews.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [currentIndex, sortedNews.length]);

  useEffect(() => {
    if (currentIndex >= sortedNews.length) setCurrentIndex(0);
  }, [currentIndex, sortedNews.length]);

  if (!sortedNews.length) return null;

  const currentNews = sortedNews[currentIndex];
  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + sortedNews.length) % sortedNews.length);
  };
  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % sortedNews.length);
  };

  const newsContent = (
    <div
      key={currentNews.id}
      className="relative z-10 min-h-[285px] px-16 py-10 sm:px-20 md:min-h-[300px] md:px-24 md:py-12 flex flex-col justify-center animate-news-enter"
      style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.85)' }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className="inline-flex items-center rounded-full border border-white/40 bg-black/20 px-3 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
          {categoryLabels[currentNews.category]}
        </span>
        <time className="text-sm font-mono font-medium text-white" dateTime={currentNews.date}>
          {currentNews.date}
        </time>
      </div>

      <h2 className="max-w-5xl text-2xl md:text-4xl font-bold leading-tight tracking-tight text-white group-hover:text-primary-100 transition-colors">
        {currentNews.title}
      </h2>

      {currentNews.summary && (
        <p className="mt-4 max-w-4xl text-sm md:text-base font-medium leading-relaxed text-white line-clamp-2">
          {currentNews.summary}
        </p>
      )}

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
        <span>{currentNews.link ? '查看新闻原文' : '阅读新闻详情'}</span>
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );

  return (
    <section
      className="overflow-hidden rounded-lg border border-primary-50 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
      aria-label="新闻动态轮播"
    >
      <style>{`
        @keyframes news-enter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-news-enter { animation: news-enter 500ms ease-out; }
      `}</style>

      <div className="flex items-center justify-between border-b border-primary-100 bg-[#faf9ff] px-5 py-3">
        <h2 className="text-lg font-bold text-primary-800">新闻动态</h2>
        <Link to="/news" className="flex items-center gap-1 text-sm text-primary-500 transition-all hover:translate-x-1 hover:text-primary-700">
          查看更多
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-700 to-slate-900">
        {currentNews.image && (
          <img
            key={`image-${currentNews.id}`}
            src={currentNews.image}
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            referrerPolicy="no-referrer"
            decoding="async"
          />
        )}

        {currentNews.link ? (
          <a href={currentNews.link} target="_blank" rel="noopener noreferrer" className="group block">
            {newsContent}
          </a>
        ) : (
          <Link to={`/news/${currentNews.id}`} className="group block">
            {newsContent}
          </Link>
        )}

        {sortedNews.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2.5 text-white shadow-lg backdrop-blur-md transition-all hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/70 md:left-5"
              aria-label="上一则新闻"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2.5 text-white shadow-lg backdrop-blur-md transition-all hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/70 md:right-5"
              aria-label="下一则新闻"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 right-5 z-20 flex items-center gap-1.5" aria-label="选择新闻">
              {sortedNews.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/75'
                  }`}
                  aria-label={`切换到第 ${index + 1} 则新闻`}
                  aria-current={index === currentIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsCarousel;
