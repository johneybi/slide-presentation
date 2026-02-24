import React from 'react';

export default function Slide02() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      <div className="flex-1 w-full max-w-6xl flex flex-col justify-start z-10">
        
        {/* Header Section (Restored to V1 Typography Size & Spacing) */}
        <div className="mb-12">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
            Problem Definition 1. Functional Literacy Crisis
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            "세 줄 요약"이 만든 인지적 오만,<br />
            <span className="text-accent-red">2030 '실무 문맹'의 경고</span>
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
            숏폼에 길들여진 세대는 요약본만으로 다 안다고 착각하는 '인지적 오만'에 빠지기 쉽습니다. 정작 근로계약서, 금융 약관 등 권리 방어가 필요한 결정적 순간에는 글의 숨은 맥락을 파악하지 못해 타인에게 무비판적으로 의존하는 <strong className="text-accent-red">실질적 문해력의 붕괴</strong>가 일어나고 있습니다.
          </p>
        </div>

        {/* Unboxed Content Section */}
        <div className="flex items-center gap-24 mt-8">
          
          {/* Functional illiteracy chart & data */}
          <div className="flex items-center gap-12">
            <div 
              className="w-48 h-48 rounded-full shadow-inner relative flex-shrink-0"
              style={{
                background: 'conic-gradient(#EF4444 0% 22%, #f3f4f6 22% 100%)'
              }}
            >
              <div className="absolute inset-[24px] bg-canvas rounded-full flex items-center justify-center shadow-inner">
                <span className="text-4xl font-black text-accent-red">22%</span>
              </div>
            </div>
            
            <div className="max-w-xs">
              <h3 className="text-xl font-bold text-gray-400 mb-2">국가평생교육진흥원 (2020)</h3>
              <div className="text-5xl font-black text-primary mb-4 tracking-tighter">960만 명</div>
              <p className="text-secondary font-medium leading-relaxed">
                일상적인 문서의 내용을 제대로 이해하고 활용하지 못하는 <strong>실질적 문맹 상태</strong>에 놓여 있습니다.
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-48 bg-gray-200"></div>

          {/* Popcorn Brain Visulaization */}
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">팝콘 브레인 현상</h3>
            <p className="text-secondary font-medium leading-relaxed max-w-sm mb-12">
              빠르고 즉각적인 자극에만 뇌가 반응하며, 길고 깊은 사고를 요구하는 텍스트에는 무감각해지는 현상.
            </p>

            <div className="flex items-center justify-between w-full max-w-md relative">
              <svg className="absolute inset-0 w-full h-[2px] top-1/2 -translate-y-1/2" preserveAspectRatio="none">
                <line x1="10%" y1="0" x2="40%" y2="0" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="60%" y1="0" x2="90%" y2="0" stroke="#FCA5A5" strokeWidth="4" />
              </svg>
              
              <div className="flex flex-col items-center bg-canvas z-10 px-4">
                <div className="text-sm font-bold text-gray-400 mb-4">긴 글 읽기</div>
                <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center opacity-70">
                   <div className="text-xs font-bold text-gray-400 text-center leading-tight tracking-tighter">전전두엽<br/>활성 저하</div>
                </div>
              </div>

              <div className="flex flex-col items-center bg-canvas z-10 px-4">
                <div className="text-sm font-bold text-accent-red mb-4">숏폼 시청</div>
                <div className="w-20 h-20 bg-red-50 border-2 border-accent-red/30 shadow-lg shadow-red-100/50 rounded-full flex items-center justify-center">
                   <div className="text-sm font-bold text-accent-red text-center leading-tight tracking-tighter">도파민<br/>과다 분비</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
