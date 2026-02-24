import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden font-sans">
      <div className="w-full max-w-4xl p-12 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
        
        <div className="mb-12">
          <h1 className="text-5xl font-black text-primary mb-4">
            bitelearn <span className="text-brand-blue">Presentation</span>
          </h1>
          <p className="text-xl text-secondary font-medium">실전 문해력 솔루션 슬라이드 버전을 선택해 주세요.</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Version 1 Card */}
          <div 
            onClick={() => navigate('/v1')}
            className="flex flex-col text-left p-8 rounded-2xl border-2 border-brand-blue/20 bg-brand-blue/5 hover:bg-brand-blue/10 hover:border-brand-blue cursor-pointer transition-all duration-300 group"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="bg-brand-blue text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Version 1</span>
              <span className="text-brand-blue opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-3">MVP 기획안 (최초)</h3>
            <p className="text-base text-secondary font-medium leading-relaxed">
              부동산 핫스팟 판독 실전 훈련 설계 및 검증 데이터가 포함된 기본 프레젠테이션입니다.
            </p>
          </div>

          {/* Version 2 Card */}
          <div
            onClick={() => navigate('/v2')}
            className="flex flex-col text-left p-8 rounded-2xl border-2 border-brand-blue/20 bg-brand-blue/5 hover:bg-brand-blue/10 hover:border-brand-blue cursor-pointer transition-all duration-300 group"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="bg-brand-blue text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Version 2</span>
              <span className="text-brand-blue opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-3">V2. 마이크로 러닝 UI/UX</h3>
            <p className="text-base text-secondary font-medium leading-relaxed">
              새로운 인터랙티브 스니펫, 퀴즈, 시뮬레이션 UI/UX 디자인이 추가된 버전입니다.
            </p>
          </div>

        </div>

      </div>
      
      {/* Footer */}
      <p className="mt-8 text-sm font-medium text-gray-400">
        &copy; 2026 bitelearn. All rights reserved.
      </p>
    </div>
  );
}
