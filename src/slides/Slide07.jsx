import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Slide07() {
  return (
    <SlideLayout
      caption="MVP Validation"
      header="가장 뾰족한 타겟 '부동산'으로 거대 가설을 증명하다."
      subcopy="bitelearn 플랫폼의 첫 비치헤드 마켓(거점 시장)으로 '부동산 튜토리얼' 모듈을 우선 배포했습니다. 유저들의 '서류 핫스팟 판독' 과업 성공률을 테스트하여 작고 날카로운 MVP의 실행력을 검증했습니다."
    >
      <div className="w-full h-full flex justify-center py-8 gap-12 items-stretch">
        
        {/* Beachhead Market Strategy */}
        <div className="w-1/3 bg-card rounded-[24px] p-10 flex flex-col items-center justify-center text-center relative border border-soft-border/50">
          <div className="w-32 h-32 rounded-full bg-brand-blue/10 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 border-4 border-brand-blue/30 rounded-full animate-ping opacity-20"></div>
            <span className="text-5xl">🎯</span>
          </div>
          <h3 className="text-2xl font-extrabold text-primary mb-4">Beachhead Market</h3>
          <p className="text-lg font-medium text-secondary mb-8 leading-relaxed">청년층이 가장 큰 생존의 위협을 느끼며, 텍스트 거부감으로 인한 피해가 명확한 <strong className="text-brand-blue">부동산 계약 시장</strong>을 타겟</p>
          <div className="w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
            <span className="text-sm font-extrabold text-primary">MVP Focus: 부동산 검증</span>
          </div>
        </div>

        {/* Validation Data */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-xl font-extrabold text-primary">MVP 테스트 결과: 서류 판독 과업 성공률</h3>
            <div className="h-px flex-1 bg-gray-200 ml-4"></div>
          </div>

          {/* Chart Area */}
          <div className="flex-1 bg-white border border-gray-100 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-10 flex flex-col">
            
            <div className="flex items-end flex-1 gap-16 px-16 pb-8 border-b-2 border-gray-100">
              
              {/* Bar 1 */}
              <div className="flex-1 flex flex-col items-center gap-4 group">
                <span className="text-4xl font-extrabold text-secondary opacity-40 mb-2">14%</span>
                <div className="w-full bg-gray-100 rounded-t-[16px] h-[15%] transition-all duration-500 group-hover:bg-gray-200"></div>
                <span className="text-lg font-extrabold text-secondary mt-2">Before<br/><span className="text-xs font-medium opacity-70">일반 텍스트 문서 제공 시</span></span>
              </div>

              {/* Bar 2 */}
              <div className="flex-1 flex flex-col items-center gap-4 group">
                <div className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold mb-2 animate-bounce">
                  +68%p 상승
                </div>
                <span className="text-6xl font-black text-brand-blue mb-2">82%</span>
                <div className="w-full bg-brand-blue rounded-t-[16px] h-[85%] shadow-[0_0_20px_rgba(42,118,242,0.3)] transition-all duration-500"></div>
                <span className="text-lg font-extrabold text-primary mt-2">After<br/><span className="text-xs font-medium text-secondary">bitelearn UX 적용 후</span></span>
              </div>

            </div>

            <div className="mt-8">
              <p className="text-lg text-secondary text-center">
                긴 문서를 던져주었을 때 14%에 불과했던 위험 요소 발견율이, <br/>
                인터랙티브 스니펫 훈련 이후 <strong className="text-primary font-bold">82%로 수직 상승</strong>하며 가설을 증명했습니다.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
