import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Slide02() {
  return (
    <SlideLayout
      caption="Problem Definition"
      header="전세 사기 피해자의 75.1%, 왜 2030 청년일까요?"
      subcopy="문제는 지능이 아니라 '실전 문해력'의 부재였습니다. 길고 어려운 공문서를 기피하는 세대적 특성(Macro)이 중개사의 말만 믿게 만들고, 결국 전 재산을 잃는 '생존의 위협(Micro)'으로 직결되고 있습니다."
    >
      <div className="w-full h-full flex items-center justify-center gap-12">
        {/* Left Side: Big Data Point */}
        <div className="flex-1 flex flex-col items-center justify-center h-full bg-card rounded-[24px] p-12 relative overflow-hidden">
          <div className="w-[400px] h-[400px] rounded-full border-[24px] border-brand-blue/10 absolute -top-20 -left-20"></div>
          
          <span className="text-accent-red text-[7rem] font-black leading-none tracking-tighter mb-2 z-10">75.1%</span>
          <span className="text-primary text-lg font-extrabold z-10 text-center">전세 사기 피해자 중<br/>2030 청년 비율</span>
          
          <div className="mt-12 bg-white px-8 py-4 rounded-full shadow-sm border border-soft-border z-10">
            <span className="text-secondary text-base font-normal">생존을 위협받는 핵심 타겟</span>
          </div>
        </div>

        {/* Right Side: Process Flow of the Problem */}
        <div className="flex-[1.2] flex flex-col justify-center gap-8 h-full pl-8">
          <div className="flex items-start gap-6 group">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-400 shrink-0">1</div>
            <div>
              <h3 className="text-lg font-extrabold text-primary mb-2">세대적 특성 (Macro)</h3>
              <p className="text-base font-medium text-secondary">길고 어려운 공문서 및 법률 용어 기피</p>
            </div>
          </div>
          
          <div className="w-1 bg-gray-200 h-10 ml-8"></div>
          
          <div className="flex items-start gap-6 group">
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-lg font-bold text-brand-blue shrink-0">2</div>
            <div>
              <h3 className="text-lg font-extrabold text-primary mb-2">행동 양식의 변화</h3>
              <p className="text-base font-medium text-secondary">서류 검증을 포기하고 중개인의 말만 맹신</p>
            </div>
          </div>
          
          <div className="w-1 bg-accent-red/20 h-10 ml-8"></div>
          
          <div className="flex items-start gap-6 group">
            <div className="w-16 h-16 rounded-full bg-accent-red/10 flex items-center justify-center text-lg font-bold text-accent-red shrink-0">3</div>
            <div>
              <h3 className="text-lg font-extrabold text-accent-red mb-2">결과 (Micro)</h3>
              <p className="text-base font-medium text-secondary">치명적인 정보 비대칭으로 인한 <strong className="font-bold text-primary">전 재산 상실 및 생존 위협</strong></p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
