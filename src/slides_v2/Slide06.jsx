import React from 'react';
import { Home, ShieldAlert, Check, X } from 'lucide-react';

export default function Slide06() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-start z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
            MVP Feature 1. Terminology Mastering
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            "깡통 전세? 근저당?"<br />
            <span className="text-brand-blue">몰라도 일단 넘기세요.</span>
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
            김 대리가 마주한 높은 진입 장벽, 가장 헷갈리는 법률 용어부터 부숩니다. bitelearn의 스와이프 퀴즈를 게임하듯 풀다 보면, 어느새 내 돈을 지킬 필수 용어들이 <strong className="text-brand-blue">근육에 기억</strong>됩니다.
          </p>
        </div>

        {/* Feature UI Mockup Section - Unboxed */}
        <div className="flex items-center justify-center flex-1 gap-24">
          
          {/* Decorative Phone Background container */}
          <div className="relative w-[380px] h-[720px] flex-shrink-0 bg-[#f8f9fa] rounded-[48px] shadow-2xl border-[12px] border-white flex flex-col items-center p-6 overflow-hidden transform transition-transform hover:-translate-y-4 duration-500">
            
            {/* Background stacked cards to indicate swipe stack */}
            <div className="absolute top-[15%] w-[80%] h-[50%] bg-gray-200 rounded-3xl transform scale-90 -translate-y-6 opacity-30"></div>
            <div className="absolute top-[15%] w-[85%] h-[50%] bg-gray-300 rounded-3xl transform scale-95 -translate-y-3 opacity-50"></div>

            {/* Active Swipe Card Mockup (Tilted slightly to show interaction) */}
            <div className="relative z-10 w-[90%] h-[55%] mt-12 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col p-6 transform rotate-3 translate-x-4">
               
               {/* Card Decor / Illustration */}
               <div className="flex-1 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 mb-6 flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                   <Home className="w-24 h-24 text-primary opacity-20" strokeWidth={1.5} />
                   <ShieldAlert className="w-16 h-16 text-accent-red absolute -bottom-4 -right-4 transform rotate-12 drop-shadow-md" fill="#fff" strokeWidth={1.5}/>
                 </div>
               </div>

               {/* Term Content */}
               <div className="text-center mb-6">
                 <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">부동산 기초</p>
                 <h3 className="text-3xl font-black text-primary">근저당권</h3>
               </div>
            </div>

            {/* Bottom Swipe Controls */}
            <div className="absolute bottom-12 w-full flex justify-center gap-12 px-12 z-20">
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-red-500 cursor-pointer">
                  <X className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">몰라요</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-accent-green cursor-pointer">
                  <Check className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">알아요</span>
              </div>

            </div>
          </div>
          
          {/* Explainer Side Text - Minimalist and unboxed */}
          <div className="flex-1 flex flex-col gap-16 pr-12">
            
            <div className="relative">
              <h4 className="text-2xl font-extrabold text-brand-blue mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-blue rounded-full inline-block"></span>
                Tinder-like 로우 텐션 조작
              </h4>
              <p className="text-secondary text-lg font-medium leading-relaxed">
                정답을 맞혀야 한다는 부담감을 대폭 줄이고, 좌우 스와이프라는 단순한 물리적 조작만으로 모바일 중심의 강력한 반복 학습률을 유도합니다.
              </p>
            </div>
            
            <div className="relative">
               <h4 className="text-2xl font-extrabold text-primary mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gray-300 rounded-full inline-block"></span>
                직관적 메타포 중심
               </h4>
               <p className="text-secondary text-lg font-medium leading-relaxed">
                 복잡하고 현학적인 텍스트 정의를 읽기 전에, 직관적인 시각적 일러스트(Ex. 은행 마크 자물쇠가 채워진 집)로 개념의 뉘앙스를 먼저 뇌에 각인시킵니다.
               </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
