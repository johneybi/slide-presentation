import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Slide08() {
  return (
    <SlideLayout
      caption="Outcome & Expansion"
      header="단순한 부동산 앱이 아닌, 인생을 지키는 필수 플랫폼으로."
      subcopy="부동산 모듈에서 검증된 팩트체크 역량 데이터를 근거로 Product-Market Fit(PMF)을 확인했습니다. 이 성공 공식을 바탕으로 노동, 금융 카테고리로 bitelearn을 수평 확장합니다."
    >
      <div className="w-full h-full flex flex-col justify-center items-center relative gap-12 py-8">
        
        <h3 className="text-2xl font-extrabold text-primary mb-4 text-center">
          bitelearn <span className="text-brand-blue">Platform Expansion</span> Roadmap
        </h3>

        <div className="flex w-full max-w-5xl justify-between items-start relative">
          
          {/* Connecting Line (Hidden as requested) */}
          <div className="hidden absolute left-20 right-20 top-[64px] h-2 bg-gray-100 -translate-y-1/2 z-0 rounded-full overflow-hidden">
            <div className="h-full bg-brand-blue w-1/3 opacity-30"></div>
          </div>

          {/* Module 1: Real Estate (Current) */}
          <div className="relative z-10 flex flex-col items-center w-64">
            <div className="w-32 h-32 bg-brand-blue rounded-full shadow-[0_10px_30px_rgba(42,118,242,0.4)] flex items-center justify-center text-6xl border-4 border-white mb-6">
              🏠
            </div>
            <div className="bg-white px-4 py-1 rounded-full border border-gray-200 text-xs font-bold text-brand-blue mb-4">
              PMF Verified
            </div>
            <h4 className="text-xl font-extrabold text-primary mb-2">Phase 1. 부동산</h4>
            <p className="text-center text-sm font-medium text-secondary">깡통전세 예방<br/>임대차 계약서 검증</p>
          </div>

          {/* Arrow */}
          <div className="relative z-10 mt-[48px] bg-canvas px-4"><span className="text-xl text-gray-300 font-bold">❯❯</span></div>

          {/* Module 2: Labor (Next) */}
          <div className="relative z-10 flex flex-col items-center w-64">
            <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center text-6xl border-4 border-gray-100 mb-6 group-hover:border-brand-blue transition-colors cursor-pointer">
              <span className="opacity-50 group-hover:opacity-100">💼</span>
            </div>
            <div className="bg-gray-100 px-4 py-1 rounded-full text-xs font-bold text-gray-500 mb-4">
              Next Expansion
            </div>
            <h4 className="text-xl font-extrabold text-primary mb-2">Phase 2. 노동</h4>
            <p className="text-center text-sm font-medium text-secondary">근로계약서 독소조항<br/>임금 체불 예방</p>
          </div>

          {/* Arrow */}
          <div className="relative z-10 mt-[48px] bg-canvas px-4"><span className="text-xl text-gray-300 font-bold">❯❯</span></div>

          {/* Module 3: Finance (Future) */}
          <div className="relative z-10 flex flex-col items-center w-64">
            <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center text-6xl border-4 border-gray-100 mb-6 group-hover:border-brand-blue transition-colors cursor-pointer">
              <span className="opacity-50 group-hover:opacity-100">💸</span>
            </div>
            <div className="h-[28px] mb-4"></div> {/* Spacer for alignment */}
            <h4 className="text-xl font-extrabold text-primary mb-2">Phase 3. 금융</h4>
            <p className="text-center text-sm font-medium text-secondary">대출 약관 해독<br/>채무 방어 시뮬레이션</p>
          </div>

        </div>

        {/* Conclusion Banner */}
        <div className="mt-8 bg-card-tinted border border-brand-blue/20 w-fit px-12 py-6 rounded-full flex items-center gap-4">
          <div className="w-4 h-4 bg-brand-blue rounded-full animate-pulse"></div>
          <span className="text-lg font-extrabold text-primary">생존이 걸린 실전 문해력, <span className="text-brand-blue">bitelearn</span>이 지킵니다.</span>
        </div>

      </div>
    </SlideLayout>
  );
}
