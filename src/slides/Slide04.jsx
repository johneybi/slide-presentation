import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Slide04() {
  return (
    <SlideLayout
      caption="Solution 1 : Terminology Mastering"
      header='"깡통 전세가 뭐지?" 몰라도 손가락만 움직이세요.'
      subcopy="높은 진입 장벽을 깨기 위해 텍스트 사전을 버렸습니다. 직관적인 비유와 틴더형(Match & Drag) 스와이프를 도입해 낯선 법률 용어를 뇌에 즉각 각인시킵니다."
    >
      <div className="w-full h-full flex items-center justify-center gap-24 relative">
        
        {/* Phone UI Mockup - Tinder Style swipe */}
        <div className="w-[420px] h-[760px] bg-white rounded-t-[48px] rounded-b-none shadow-[0_-10px_40px_rgba(0,0,0,0.08)] border-8 border-b-0 border-gray-100 flex flex-col overflow-hidden relative shrink-0 z-20 self-end -mb-16">
          {/* Top Bar */}
          <div className="h-16 w-full flex items-center justify-center relative">
            <div className="w-1/3 h-6 bg-gray-200 rounded-full absolute top-2"></div>
          </div>
          
          {/* Progress */}
          <div className="px-8 mt-2 flex gap-2">
            <div className="h-2 flex-1 bg-brand-blue rounded-full"></div>
            <div className="h-2 flex-1 bg-brand-blue rounded-full"></div>
            <div className="h-2 flex-1 bg-gray-200 rounded-full"></div>
            <div className="h-2 flex-1 bg-gray-200 rounded-full"></div>
          </div>

          <div className="px-8 mt-8 mb-4">
            <h3 className="text-xl font-extrabold text-primary">개념 매칭 훈련</h3>
            <p className="text-gray-500 text-sm font-medium mt-1">알맞은 카드를 연결하세요</p>
          </div>

          {/* Swipe Card Area */}
          <div className="flex-1 relative p-8">
            {/* Background Card */}
            <div className="absolute inset-8 top-12 bg-gray-50 rounded-[24px] border border-gray-200 shadow-sm scale-95 origin-bottom"></div>
            
            {/* Active Card being dragged */}
            <div className="absolute inset-8 bg-brand-blue rounded-[32px] shadow-lg flex flex-col p-8 text-white transform rotate-3 translate-x-4">
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <div className="text-6xl mb-6 drop-shadow-md">🥫</div>
                <h4 className="text-2xl font-extrabold mb-4">깡통 전세</h4>
                <p className="text-base text-white/80 leading-relaxed font-medium">집값보다 전세금이 더 높거나<br/>비슷해서, 보증금을 돌려받지<br/>못할 위험이 큰 집</p>
              </div>
            </div>
            
            {/* Hand Cursor indication */}
            <div className="absolute -right-4 top-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border-2 border-white flex items-center justify-center animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="h-32 flex justify-center items-center gap-6 px-8 pb-8">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-400">×</div>
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-3xl font-bold text-brand-blue">○</div>
          </div>
        </div>

        {/* Right side Text Explainers */}
        <div className="flex-1 flex flex-col gap-12 z-20">
          <div className="bg-card w-full rounded-[24px] p-10 relative">
            <div className="absolute -left-5 top-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md font-bold text-brand-blue text-xl border border-gray-100">1</div>
            <h3 className="text-xl font-extrabold text-primary mb-4">텍스트 사전 완벽 폐기</h3>
            <p className="text-lg text-secondary leading-relaxed">법률 용어를 외우게 하는 대신, 직관적인 비유(예: 깡통 그림)를 사용하여 우뇌적 학습을 유도합니다.</p>
          </div>

          <div className="bg-card-tinted w-full rounded-[24px] p-10 border border-brand-blue/10 relative">
            <div className="absolute -left-5 top-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md font-bold text-brand-blue text-xl border border-gray-100">2</div>
            <h3 className="text-xl font-extrabold text-brand-blue mb-4">Match & Drag 스와이프</h3>
            <p className="text-lg text-secondary leading-relaxed">데이트 앱처럼 좌우로 스와이프(틴더형 UI)하는 조작감을 제공하여, <strong className="font-bold text-primary">거부감을 없애고 도파민을 분비</strong>시킵니다.</p>
          </div>
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl z-0"></div>
      </div>
    </SlideLayout>
  );
}
