import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Slide06() {
  return (
    <SlideLayout
      caption="Solution 3 : Crisis Simulation"
      header='"이자 지원해 드릴게!" 사기꾼의 유혹, 당신의 선택은?'
      subcopy="계약 현장의 심리적 압박을 미리 경험합니다. 유저의 선택에 따라 보증금을 지킬 수도, 잃을 수도 있는 다중 분기형 시뮬레이션으로 방어적 의사결정을 훈련합니다."
    >
      <div className="w-full h-full flex flex-col justify-center items-center relative py-8">
        
        {/* Decision Flow Tree */}
        <div className="w-full max-w-5xl relative flex flex-col items-center">
          
          {/* Situation Card */}
          <div className="bg-card w-full max-w-2xl rounded-[24px] p-8 shadow-sm border border-soft-border/50 text-center relative z-10">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-3xl mx-auto -mt-16 mb-6">🤝</div>
            <h3 className="text-xl font-extrabold text-primary mb-3">공인중개사의 제안</h3>
            <p className="text-lg font-medium text-secondary leading-relaxed mb-6">
              "지금 집주인이 돈이 조금 모자라서 그러는데, <br/>
              대신 잔금 치르기 전까지 발생하는 <strong className="text-primary font-bold">이자는 전부 지원해 드릴게요.</strong><br/>
              이런 조건 구하기 힘듭니다. 오늘 바로 가계약하시죠."
            </p>
          </div>

          {/* Connectors */}
          <div className="flex flex-col items-center -mt-4 mb-4 relative z-0">
            <div className="w-0 h-8 border-l-2 border-gray-200"></div>
            <div className="w-[464px] border-t-2 border-gray-200 h-8 flex justify-between">
              <div className="w-0 h-full border-l-2 border-gray-200"></div>
              <div className="w-0 h-full border-r-2 border-gray-200"></div>
            </div>
          </div>

          {/* Choices Row */}
          <div className="flex w-full justify-center gap-16 relative z-10 mt-4">
            
            {/* Bad Choice */}
            <div className="w-[400px] flex flex-col items-center">
              <div className="w-full bg-white p-6 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-accent-red/50 transition-colors text-center cursor-pointer group">
                <span className="block text-xl font-extrabold text-primary mb-2 group-hover:text-accent-red">수락한다</span>
                <span className="text-sm font-medium text-secondary">"이자 지원이면 오히려 이득 아닌가?"</span>
              </div>
              <div className="w-0 h-10 border-l-2 border-dashed border-accent-red/50 mt-4"></div>
              <div className="w-full bg-accent-red/10 p-5 rounded-[16px] border border-accent-red/20 text-center mt-4">
                <span className="text-4xl mb-2 block">💸</span>
                <h4 className="text-base font-extrabold text-accent-red mb-1">보증금 1억원 상실</h4>
                <p className="text-sm text-accent-red/80 font-medium">대항력 발생 전 근저당 설정 피해</p>
              </div>
            </div>

            {/* Good Choice */}
            <div className="w-[400px] flex flex-col items-center">
              <div className="w-full bg-white p-6 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-brand-blue/30 bg-brand-blue/5 text-center cursor-pointer group">
                <span className="block text-xl font-extrabold text-brand-blue mb-2">거절한다</span>
                <span className="text-sm font-medium text-secondary">"조건이 지나치게 좋습니다. 계약 취소할게요."</span>
              </div>
              <div className="w-0 h-10 border-l-2 border-dashed border-accent-green/50 mt-4"></div>
              <div className="w-full bg-accent-green/10 p-5 rounded-[16px] border border-accent-green/20 text-center mt-4">
                <span className="text-4xl mb-2 block">🛡️</span>
                <h4 className="text-base font-bold text-accent-green mb-1">안전 방어 성공</h4>
                <p className="text-sm text-accent-green/80 font-medium">사기꾼의 달콤한 유혹을 회피함</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
