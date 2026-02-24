import React from 'react';
import { Wallet } from 'lucide-react';

export default function Slide05() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      
      <div className="flex-1 w-full max-w-6xl flex flex-col justify-start z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
            Target Persona
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            자산 3천만 원, 전세대출 1.2억.<br />
            <span className="text-accent-red">김 대리가 직면한 진짜 위기</span>
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
            강서구 화곡동에서 빌라를 찾는 29세 직장인 김강서. 대출을 받을 실행력은 있지만, 깡통 전세의 위험을 서류로 읽어낼 <strong>'실무 지식'</strong>이 없습니다. 1.2%의 저금리 대출과 중개사의 감언이설 앞에 그녀의 전 재산은 무방비로 노출되어 있습니다.
          </p>
        </div>

        {/* Persona Profile Section - Unboxed */}
        <div className="flex items-start gap-24 mt-8 flex-1">
          
          {/* Persona Visual / Intro */}
          <div className="w-auto flex flex-col items-start pt-4">
            
            {/* Real Photographic Avatar */}
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" 
              alt="Kim Gang-seo Persona" 
              className="w-56 h-56 rounded-full object-cover shadow-2xl border-8 border-white mb-6"
            />

            <h3 className="text-3xl font-extrabold text-primary mb-2">김강서 (29)</h3>
            <p className="text-lg font-bold text-gray-400 mb-6">3년 차 중소기업 대리 / 1인 가구</p>
            
            <div className="flex gap-2 flex-wrap">
              <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold">#청년전용버팀목</span>
              <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold">#빌라전세</span>
              <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold">#사회초년생</span>
            </div>
          </div>

          {/* Financial Status & Pain Point */}
          <div className="flex-1 flex flex-col gap-12 mt-4">
            
            {/* Unboxed Financial Graph */}
            <div className="w-full flex flex-col">
              <h4 className="text-2xl font-extrabold text-primary mb-8 flex items-center gap-3">
                <Wallet className="w-8 h-8 text-brand-blue" />
                재무 상태의 극단적 불균형
              </h4>
              
              <div className="flex flex-col gap-8 pr-12">
                {/* Asset Bar */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-lg font-bold text-gray-500">보유 자산 (내 자본)</span>
                    <span className="text-primary text-2xl font-black">3,000만 원</span>
                  </div>
                  <div className="w-full h-8 bg-gray-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-brand-blue rounded-full w-[20%]"></div>
                  </div>
                </div>

                {/* Loan Bar */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-lg font-bold text-gray-500">전세 자금 대출 (부채)</span>
                    <span className="text-accent-red text-2xl font-black">1억 2,000만 원</span>
                  </div>
                  <div className="w-full h-8 bg-red-50 rounded-full overflow-hidden flex">
                    <div className="h-full bg-accent-red rounded-full w-[80%] relative">
                       {/* Pattern for debt */}
                       <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, #ffffff 15px, #ffffff 30px)'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimalist Quote */}
            <div className="border-l-4 border-primary pl-8 mt-4">
               <p className="text-2xl font-bold text-gray-800 leading-relaxed italic">
                 "중개사님이 집주인 부자라서 안전하다는데...<br/>
                 등기부등본에 적힌 <strong className="text-accent-red box-decoration-slice bg-red-50 px-2 leading-tight">'선순위 근저당'</strong>이 무슨 뜻인지 모르겠어요."
               </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
