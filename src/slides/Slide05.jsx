import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Slide05() {
  return (
    <SlideLayout
      caption="Solution 2 : Interactive Verification"
      header="남의 말 믿지 말고, 내 눈으로 직접 숨은 위험 찾기."
      subcopy="사기를 당하는 진짜 이유는 서류를 볼 줄 모르기 때문입니다. 등기부등본 이미지를 띄우고 숨겨진 근저당을 유저가 직접 터치해 찾아내는 '핫스팟 판독 실전 훈련'을 설계했습니다."
    >
      <div className="w-full h-full flex items-center justify-center gap-16 relative">
        
        {/* Document Scanner UI */}
        <div className="flex-1 max-w-2xl h-[700px] bg-[#F7F9FB] rounded-[32px] shadow-sm border border-soft-border/50 flex flex-col items-center justify-center p-8 relative">
          
          <h3 className="text-lg font-extrabold text-secondary mb-6 tracking-wide uppercase">등기사항전부증명서 (말소사항포함)</h3>
          
          {/* Document visual representation */}
          <div className="w-full bg-white flex-1 rounded-[16px] shadow-sm border border-gray-200 p-8 flex flex-col gap-6 relative">
            <div className="flex justify-between items-center border-b pb-4">
              <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
              <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="flex-1 h-4 bg-gray-100 rounded"></div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="flex-1 h-4 bg-gray-100 rounded"></div>
            </div>

            {/* Hidden Danger Hotspot (Clicked State) */}
            <div className="mt-8 relative group cursor-pointer w-full p-4 rounded-lg bg-accent-red/5 border-2 border-accent-red border-dashed">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-4 bg-accent-red/20 rounded"></div>
                <div className="w-1/3 h-4 bg-accent-red/40 rounded"></div>
                <div className="flex-1 h-4 bg-accent-red/20 rounded"></div>
              </div>
              <div className="flex gap-4 items-center mt-2">
                <div className="w-16 h-4 bg-transparent"></div>
                <div className="w-1/2 h-4 bg-accent-red/40 rounded"></div>
              </div>
              
              {/* Highlight Overlay */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent-red text-white flex items-center justify-center rounded-full shadow-lg z-10 font-bold">
                !
              </div>

              {/* Tooltip */}
              <div className="absolute top-1/2 -right-6 translate-x-full -translate-y-1/2 bg-white px-6 py-4 rounded-xl shadow-xl border border-gray-100 w-64 z-20">
                <p className="text-sm font-extrabold text-accent-red mb-1">근저당권설정 발견!</p>
                <p className="text-xs font-medium text-secondary leading-relaxed">집주인이 이 집을 담보로 빚을 지고 있습니다. 계약을 피하세요.</p>
                <div className="w-3 h-3 bg-white border-l border-b border-gray-100 absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform"></div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="flex-1 h-4 bg-gray-100 rounded"></div>
            </div>
          </div>
          
          {/* Radar Scan Line Animation (Static rep) */}
          <div className="absolute left-0 right-0 top-1/3 h-1 bg-brand-blue/50 shadow-[0_0_15px_rgba(42,118,242,0.8)]"></div>
          
        </div>

        {/* Right side Text Explainers */}
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <span className="text-brand-blue font-bold px-4 py-1.5 bg-brand-blue/10 rounded-full text-sm mb-4 inline-block tracking-wide">핵심 기능</span>
            <h2 className="text-4xl font-extrabold text-primary mb-6 leading-tight">서류 속 숨은 폭탄,<br/>직접 터치해서 찾아내다</h2>
            <p className="text-lg text-secondary leading-relaxed">
              정보가 적힌 위치를 눈으로 훑는 것에 그치지 않습니다. 
              유저가 문서를 직접 탐색하고, <strong className="text-accent-red font-bold">위험 요소(근저당, 신탁 등)</strong>를 가리키는 영역을 터치해내야 다음 스테이지로 넘어가는 훈련 방식을 제공합니다.
            </p>
          </div>
          
          <div className="flex gap-6 mt-4">
            <div className="flex flex-col bg-card p-6 rounded-[20px] flex-1">
              <span className="text-4xl mb-3">🔍</span>
              <h4 className="text-lg font-extrabold text-primary mb-2">실전 감곽 획득</h4>
              <p className="text-sm text-secondary">어디를 봐야 할지 눈에 익힘</p>
            </div>
            <div className="flex flex-col bg-card p-6 rounded-[20px] flex-1">
              <span className="text-4xl mb-3">🛡️</span>
              <h4 className="text-lg font-extrabold text-primary mb-2">자기효능감 상승</h4>
              <p className="text-sm text-secondary">"나도 볼 수 있다"는 자신감 부여</p>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
