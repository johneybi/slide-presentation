import React from 'react';
import { Search, Info } from 'lucide-react';

export default function Slide07() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-start z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
             MVP Feature 2. Interactive Verification <span className="text-accent-red font-extrabold ml-2">(핵심 기능)</span>
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            "요즘 신축은 원래 이래요" 거짓말,<br />
            <span className="text-brand-blue">내 눈으로 깨부수기</span>
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
            사기를 당하는 이유는 서류에 적힌 <strong>'경고 신호'</strong>를 텍스트로 읽어내지 못하기 때문입니다. 실제 등기부등본을 화면에 띄우고, 숨겨진 위험 요소를 유저가 <strong className="text-primary font-bold">직접 찾아 터치하는 실전 판독 훈련</strong>을 만들었습니다.
          </p>
        </div>

        {/* Interactive Verification UI Showcase (Unboxed Layout) */}
        <div className="flex-1 flex items-center gap-24 mt-4">
          
          {/* Phone Display (Document View) */}
          <div className="relative w-[420px] h-[720px] flex-shrink-0 bg-white rounded-[48px] shadow-2xl border-8 border-gray-100 flex flex-col overflow-hidden">
            
            <div className="bg-primary text-white p-5 flex items-center justify-between z-10">
              <span className="text-xs font-bold uppercase tracking-widest opacity-80">STT 01. 위험 신호 찾기</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">진행도 1/3</span>
            </div>
            
            <div className="bg-[#f3f4f6] flex-1 p-5 relative overflow-hidden">
              
              {/* Document Paper Mockup */}
              <div className="w-full h-full bg-white border border-gray-200 shadow-sm p-6 font-serif text-gray-800 text-sm overflow-hidden">
                 <h3 className="text-center font-bold text-lg border-b-2 border-dashed border-gray-400 pb-3 mb-6 tracking-widest">등기사항전부증명서</h3>
                 
                 <p className="mb-2"><span className="font-bold">[제 1 구]</span> 표제부 (건물의 표시)</p>
                 <div className="w-full bg-gray-50 border border-gray-200 mb-6 p-3 text-xs text-gray-600">
                   서울특별시 강서구 화곡동 123-45<br/>철근콘크리트구조 슬라브지붕
                 </div>

                 <p className="mb-2"><span className="font-bold text-accent-red">[제 2 구]</span> 을구 (소유권 이외의 권리)</p>
                 <div className="w-full bg-gray-50 border border-gray-200 mb-6 flex flex-col">
                   <div className="p-3 border-b border-gray-200 flex justify-between text-xs font-bold text-gray-500">
                     <span>순위번호 1</span>
                     <span>접수 2023년 5월 12일</span>
                   </div>
                   
                   {/* Interactive Hotspot */}
                   <div className="p-4 bg-red-50/80 border-[3px] border-accent-red relative cursor-pointer">
                     <p className="font-bold text-red-600 mb-2">근저당권설정</p>
                     <p className="text-gray-700 text-xs mb-1">채권최고액 금 240,000,000원</p>
                     <p className="text-gray-700 text-xs">근저당권자 주식회사 우리은행</p>
                     
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[115%] border-2 border-accent-red rounded shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-pulse pointer-events-none"></div>
                   </div>
                 </div>
              </div>
              
              {/* Overlay Tooltip Mockup */}
              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[90%] bg-primary text-white rounded-2xl p-6 shadow-2xl z-20 border border-white/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary transform rotate-45 border-l border-t border-white/10"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue p-2 rounded-full mt-1 flex-shrink-0">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">근저당권설정이란?</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      집주인이 <strong className="text-white bg-brand-blue/30 px-1">집을 담보로 은행에 빚</strong>을 지고 있다는 표식입니다! 빚을 갚지 못하면 집이 경매로 넘어가 전세금을 돌려받지 못할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Prop Texts (Unboxed for cleaner look) */}
          <div className="flex-1 flex flex-col gap-12">
            
            <div className="relative border-l-4 border-brand-blue pl-8">
              <h3 className="text-2xl font-extrabold text-primary mb-3">원본 서류를 훼손하지 않는 UX</h3>
              <p className="text-lg text-secondary font-medium leading-relaxed max-w-lg">
                가상의 요약본이 아닌, 실제 관공서에서 발급하는 서류의 레이아웃을 그대로 살려 현실 세계에서의 서류 판독 적응력을 극대화했습니다.
              </p>
            </div>

            <div className="relative border-l-4 border-accent-red pl-8">
              <h3 className="text-2xl font-extrabold text-primary mb-3">적극적인 상호작용 (Hotspot)</h3>
              <p className="text-lg text-secondary font-medium leading-relaxed max-w-lg">
                위험한 문장에 '빨간색 마커'를 숨겨두고, 유저가 스스로 찾아서 탭하도록 유도하여 그냥 눈으로 읽고 넘기는 것을 방지하는 능동적 학습을 이끌어냅니다.
              </p>
            </div>

            <div className="relative border-l-4 border-gray-300 pl-8">
              <h3 className="text-2xl font-extrabold text-primary mb-3">즉각적인 인과 해설</h3>
              <p className="text-lg text-secondary font-medium leading-relaxed max-w-lg">
                어려운 용어를 터치하는 즉시, 그것이 '내 돈'에 미치는 악영향을 가장 직관적이고 쉬운 문장으로 풀어 화면 위에 즉시 팝업으로 설명합니다.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
