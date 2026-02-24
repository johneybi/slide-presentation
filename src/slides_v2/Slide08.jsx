import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export default function Slide08() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-start z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
            MVP Feature 3. Crisis Simulation
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            "이자 전액 지원해 드릴게!"<br />
            <span className="text-brand-blue">이 집, 계약하시겠습니까?</span>
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
            사기꾼들이 실제로 쓰는 유혹 멘트와 압박감을 게임 시나리오로 똑같이 구현했습니다. 현장의 텐션을 미리 경험하며, 반짝이는 조건 속에 숨겨진 <strong>'결정적 함정'을 피하는 훈련</strong>을 진행합니다.
          </p>
        </div>

        {/* Feature UI Mockup Section (Unboxed) */}
        <div className="flex items-center gap-24 flex-1 mt-4">
          
          {/* Chat Simulation Mobile UI */}
          <div className="relative w-[400px] h-[700px] bg-white rounded-[48px] shadow-2xl border-8 border-gray-100 flex flex-col overflow-hidden">
            
            <div className="bg-white border-b border-gray-100 p-5 flex items-center justify-between sticky top-0 z-20">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-yellow-900 text-xl border-2 border-yellow-500">
                    중
                 </div>
                 <div>
                    <h4 className="font-extrabold text-primary text-base">스타 공인중개사 (박실장)</h4>
                    <span className="text-xs text-brand-blue font-bold flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
                      온라인
                    </span>
                 </div>
               </div>
            </div>

            <div className="flex-1 bg-gray-50 p-6 overflow-y-auto flex flex-col gap-6 relative">
               <div className="text-center w-full my-1">
                 <span className="bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full font-bold">오후 2:30</span>
               </div>

               {/* Agent Bubble 1 */}
               <div className="flex items-start gap-3 max-w-[85%]">
                 <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-sm shadow-sm text-[15px] text-primary leading-relaxed font-medium">
                   강서님, 아까 보신 방 마음에 드시죠? 방금 다른 팀도 집 보고 갔는데 거기서 당장 <strong>가계약금</strong> 넣겠다고 하네요.
                 </div>
               </div>

               {/* Agent Bubble 2 (The Hook) */}
               <div className="flex items-start gap-3 max-w-[85%]">
                 <div className="bg-white border border-accent-red/30 p-4 rounded-2xl rounded-tl-sm shadow-sm text-[15px] text-primary leading-relaxed font-medium">
                   근저당권 있는 건 걱정 마시고요, 저희가 <strong>HUG 보증보험 가입 비용 전액 지원</strong>해 드릴게요. <span className="text-brand-blue font-bold tracking-tight">대출 1.2% 한도 꽉 채워서</span> 무자본으로 들어가세요!
                 </div>
               </div>

               {/* Hint Bubble */}
               <div className="flex justify-end mt-4">
                 <div className="bg-brand-blue text-white p-4 rounded-2xl rounded-tr-sm shadow-md text-sm font-medium w-[85%] opacity-90">
                   (앗, 근저당이 있는데 무조건 안심하라고? 말만 믿고 입금해도 될까? 등기부등본 원본을 달라고 강력히 요청해볼까?)
                 </div>
               </div>
            </div>

            {/* Bottom Decision Area */}
            <div className="bg-white border-t border-gray-100 p-6 z-20">
               <p className="text-xs text-center font-bold text-accent-red mb-4 uppercase tracking-widest flex justify-center items-center gap-1">
                 <AlertTriangle className="w-4 h-4" /> 결정의 순간
               </p>
               
               <div className="flex flex-col gap-3">
                 <button className="w-full py-4 text-left px-5 bg-white border border-gray-300 text-gray-600 rounded-xl font-bold shadow-sm hover:border-accent-red hover:text-accent-red transition-colors flex items-center justify-between">
                   <span>가계약금 100만 원부터 이체한다.</span>
                 </button>
                 <button className="w-full py-4 text-left px-5 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-black transition-colors flex items-center justify-between">
                   <span>등기부등본 원본 교부를 요구한다.</span>
                   <ArrowRight className="w-5 h-5 text-brand-blue" />
                 </button>
               </div>
            </div>

          </div>
          
          {/* Unboxed Text Right Side */}
          <div className="flex-1 flex flex-col gap-10">
             <div>
               <h3 className="text-3xl font-extrabold text-primary mb-4 flex items-center gap-3">
                 현실적인 심리적 압박 구현
               </h3>
               <p className="text-secondary text-lg font-medium leading-relaxed max-w-lg mb-8">
                 조급함을 유발하는 재촉, 달콤한 혜택(이자 지원, 이사비 지원 등) 등 실제 전세 사기에 사용된 <strong className="text-accent-red">전형적인 화법 패턴</strong>을 기반으로 채팅 시나리오를 설계했습니다.<br/><br/>유리한 조건에 흔들리지 않고 이성적으로 판단하는 모의 훈련을 반복합니다.
               </p>
             </div>
             
             <div className="inline-flex items-center gap-4 group cursor-pointer border-t border-gray-200 pt-8 w-max">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-brand-blue group-hover:bg-brand-blue transition-colors">
                  <ArrowRight className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
               </div>
               <span className="text-lg font-extrabold text-brand-blue underline decoration-2 underline-offset-4">
                 실전 게임 플레이 데모 영상 (예정)
               </span>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
